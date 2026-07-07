# 🚀 AI Marketing Toolkit — 4 MCP Servers to Automate Your Growth

**The only toolkit you need to automate marketing on Reddit, Twitter, Discord, and GitHub. Free, open-source, and premium features powered by AI.**

[![Sponsor](https://img.shields.io/badge/Sponsor-💖-pink.svg)](https://github.com/sponsors/1036007003-wq)
[![GitHub stars](https://img.shields.io/github/stars/1036007003-wq/ai-marketing-toolkit.svg?style=social)](https://github.com/1036007003-wq/ai-marketing-toolkit)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🎯 What is this?

A bundle of **5 MCP (Model Context Protocol) servers** that let AI agents (Claude, Cline, etc.) automate your marketing across:

| Platform | MCP Server | What it does | Free? |
|----------|-------------|---------------|-------|
| 🔥 **Reddit** | [reddit-marketing-mcp](https://github.com/1036007003-wq/reddit-marketing-mcp) | Research subreddits, find trending posts, analyze competitors | ✅ FREE |
| 🐦 **Twitter/X** | [twitter-marketing-mcp](https://github.com/1036007003-wq/twitter-marketing-mcp) | Search tweets, analyze engagement, draft replies | ✅ FREE |
| 💬 **Discord** | [discord-ai-mcp](https://github.com/1036007003-wq/discord-ai-mcp) | Find servers, draft community messages, analyze engagement | ✅ FREE |
| 🐙 **GitHub** | [github-stars-mcp](https://github.com/1036007003-wq/github-stars-mcp) | Analyze star growth, optimize README, find similar repos | ✅ FREE |
| 💼 **LinkedIn** | [linkedin-marketing-mcp](https://github.com/1036007003-wq/linkedin-marketing-mcp) | Search profiles, draft connection requests, analyze companies | ✅ FREE |

**All 4 tools work immediately without API keys for basic features.**

**Premium features** (AI-powered drafts, auto-moderation, etc.) require a [DeepSeek API key](https://platform.deepseek.com) ($0.14/1M tokens, very cheap).

---

## 🚀 Quick Start (2 minutes)

### Step 1: Install any MCP client
- **Claude Desktop**: https://claude.ai/download
- **Cline (VS Code extension)**: Search "Cline" in VS Code marketplace
- **OpenClaw**: https://openclaw.ai

### Step 2: Add these 4 servers to your MCP client

```json
{
  "mcpServers": {
    "reddit-marketing": {
      "command": "node",
      "args": ["/path/to/reddit-marketing-mcp/index.js"]
    },
    "twitter-marketing": {
      "command": "node",
      "args": ["/path/to/twitter-marketing-mcp/index.js"]
    },
    "discord-ai": {
      "command": "node",
      "args": ["/path/to/discord-ai-mcp/index.js"]
    },
    "github-stars": {
      "command": "node",
      "args": ["/path/to/github-stars-mcp/index.js"]
    }
  }
}
```

### Step 3: Start using them!
Ask your AI agent:
- "Research r/SaaS for my product launch"
- "Find trending tweets about AI marketing"
- "Draft a Reddit post for my project"
- "Analyze my GitHub repo's star growth"

---

## 💎 Premium Features (Sponsors-only)

**Sponsor on GitHub** to unlock:
- ✨ **AI-powered post generation** (DeepSeek-powered)
- 📊 **Advanced analytics** (competitor tracking, sentiment analysis)
- 🤖 **Auto-moderation templates** (Discord)
- 🎯 **Channel recommendation AI** (find the best places to post)

**Sponsorship tiers:**
- 💖 **$5/month** — All premium features
- 💖 **$25/month** — All premium + custom AI prompts
- 💖 **$99 one-time** — Lifetime access

👉 **Sponsor here:** https://github.com/sponsors/1036007003-wq

---

## 📖 Detailed Docs

Each tool has its own repo with full documentation:

1. **Reddit Marketing MCP** → https://github.com/1036007003-wq/reddit-marketing-mcp
2. **Twitter Marketing MCP** → https://github.com/1036007003-wq/twitter-marketing-mcp
3. **Discord AI MCP** → https://github.com/1036007003-wq/discord-ai-mcp
4. **GitHub Stars MCP** → https://github.com/1036007003-wq/github-stars-mcp

---

## 🏆 Why This Beats Hiring a Marketer

| Hiring a marketer | Using this toolkit |
|-------------------|-------------------|
| $3000/month salary | **$0** (free features) |
| Takes weeks to learn your product | AI learns in seconds |
| Human bias & fatigue | 24/7 consistent |
| Hard to scale | Infinite scale |

---

## 🌍 For China Users (中国用户)

```bash
# If you can't access APIs directly, set proxy:
export HTTP_PROXY=http://127.0.0.1:7890
export HTTPS_PROXY=http://127.0.0.1:7890

# Or use a VPN
```

All tools support proxy settings via `.env` file.

---

## 🚀 Roadmap

- [x] Reddit Marketing MCP (FREE + Premium)
- [x] Twitter Marketing MCP (FREE + Premium)
- [x] Discord AI MCP (FREE + Premium)
- [x] GitHub Stars MCP (FREE + Premium)
- [ ] **v2.0**: Unified dashboard (web UI)
- [ ] **v2.0**: Auto-scheduling across all platforms
- [ ] **v2.0**: AI-powered A/B testing for posts

**Sponsor to prioritize features you want!**

---

## 💰 Pricing

| Feature | Free | Premium ($5/mo) |
|---------|------|-------------------|
| Reddit research | ✅ | ✅ + AI post gen |
| Twitter search | ✅ | ✅ + AI reply gen |
| Discord server search | ✅ | ✅ + AI channel rec |
| GitHub star analysis | ✅ | ✅ + AI README opt |
| **Total value** | **$0** | **$5/mo** (1 coffee) |

**Compare:** Hiring a marketer = $3000/mo. This = $5/mo.

---

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=1036007003-wq/reddit-marketing-mcp,1036007003-wq/twitter-marketing-mcp,1036007003-wq/discord-ai-mcp,1036007003-wq/github-stars-mcp&type=Date)](https://star-history.com/#1036007003-wq/reddit-marketing-mcp&Date)

---

## 🐛 Issues / Feature Requests

Open an issue in any of the 4 repos above.

---

## 💖 Sponsor

This project is free and open-source. If it saves you time/money, please sponsor!

👉 **Sponsor on GitHub:** https://github.com/sponsors/1036007003-wq

Every dollar goes back into development 🚀

---

**Built by [@1036007003-wq](https://github.com/1036007003-wq) | ⭐ Star this repo if you find it useful!**
