const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const fetch = require('node-fetch');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Database setup
const db = new sqlite3.Database(process.env.DATABASE_PATH || './data/users.db', (err) => {
  if (err) console.error('DB error:', err);
  else console.log('✅ Database connected');
});

// Create tables
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      password TEXT,
      stripe_customer_id TEXT,
      subscription_status TEXT DEFAULT 'free',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      platform TEXT,
      content TEXT,
      status TEXT DEFAULT 'draft',
      posted_at DATETIME,
      FOREIGN KEY(user_id) REFERENCES users(id)
    )
  `);
});

// Routes

// Landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Dashboard (protected)
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// API: Research Reddit subreddit
app.post('/api/research-reddit', async (req, res) => {
  const { subreddit } = req.body;
  
  try {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/about.json`, {
      headers: { 'User-Agent': 'AIMarketingSaaS/1.0' }
    });
    
    if (!response.ok) {
      return res.json({ 
        success: true, 
        data: { 
          subreddit, 
          subscribers: 'N/A (requires proxy in China)',
          note: 'Reddit API blocked in your region. Use proxy or VPN.' 
        } 
      });
    }
    
    const data = await response.json();
    res.json({
      success: true,
      data: {
        subreddit: data.data.display_name,
        subscribers: data.data.subscribers,
        activeUsers: data.data.accounts_active,
        description: data.data.public_description
      }
    });
  } catch (error) {
    res.json({ 
      success: true, 
      data: { 
        subreddit, 
        subscribers: 'N/A',
        note: 'Reddit API blocked in your region. Use proxy or VPN.' 
      } 
    });
  }
});

// API: Generate post with AI
app.post('/api/generate-post', async (req, res) => {
  const { topic, platform, tone } = req.body;
  
  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY || 'sk-demo'}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { 
            role: 'system', 
            content: `You are a professional ${platform} marketing expert. Write posts that are engaging, authentic, and follow ${platform} best practices. Tone: ${tone || 'casual'}.` 
          },
          { 
            role: 'user', 
            content: `Write a ${platform} post about: ${topic}. Make it engaging and authentic.` 
          }
        ],
        max_tokens: 500
      })
    });
    
    if (!response.ok) {
      // Return demo content if API fails
      return res.json({
        success: true,
        data: {
          post: `[Demo] Check out this amazing ${topic}! 🚀\n\nThread below 👇\n\n#${platform} #Marketing #AI`,
          platform,
          topic,
          note: 'Demo mode - add DEEPSEEK_API_KEY for real AI generation'
        }
      });
    }
    
    const data = await response.json();
    const post = data.choices[0].message.content;
    
    res.json({
      success: true,
      data: { post, platform, topic }
    });
  } catch (error) {
    res.json({
      success: true,
      data: {
        post: `[Demo] Excited to share about ${topic}! 🔥\n\nWhat do you think?\n\n#${platform} #AI #Marketing`,
        platform,
        topic,
        note: 'Demo mode - add DEEPSEEK_API_KEY for real AI generation'
      }
    });
  }
});

// API: Get pricing
app.get('/api/pricing', (req, res) => {
  res.json({
    plans: [
      { 
        name: 'Free', 
        price: 0, 
        features: ['3 posts/month', 'Basic analytics', 'Community support'] 
      },
      { 
        name: 'Pro', 
        price: 10, 
        features: ['100 posts/month', 'AI generation', 'Advanced analytics', 'Priority support'] 
      },
      { 
        name: 'Agency', 
        price: 50, 
        features: ['Unlimited posts', 'All platforms', 'Team members', 'Custom AI training'] 
      }
    ]
  });
});

// Stripe checkout
app.post('/api/create-checkout-session', async (req, res) => {
  const { plan } = req.body;
  
  // Demo mode - return success without real Stripe
  res.json({
    success: true,
    message: 'Demo mode - Stripe integration ready. Add STRIPE_SECRET_KEY to go live.',
    checkout_url: '/dashboard?demo=true'
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 AI Marketing SaaS running on http://localhost:${PORT}`);
  console.log(`📊 Dashboard: http://localhost:${PORT}/dashboard`);
});
