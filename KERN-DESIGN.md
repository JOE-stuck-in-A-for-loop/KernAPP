# Kern — Design Spec v0.1

> **Tagline:** *Your world, filtered. Nothing but signal.*

A desktop app that collects information from sources you choose, uses AI (your API key) to filter only what matters, and delivers it on your terms — instantly for urgent news, digest-style for the routine.

---

## 1. Core Philosophy

### What Kern is
- **A personal information concierge** — not another feed to scroll, but a tool that brings you *only* what you care about
- **Transparent by design** — every notification shows *why* it was selected, building trust through visibility
- **User-sovereign** — you bring your own API key, your data stays local, no subscriptions

### What Kern is not
- A scraper for paywalled/illegal/private content — Kern only collects from **public, legal, accessible sources**
- A social media client — no login-gated content, no ToS violations
- A black-box AI — the filter trace is always visible

---

## 2. Name

**Kern** — short for *kernel*, the essential seed of something valuable.

- One syllable, globally friendly
- Logo concept: a stylized seed / wheat grain / glowing dot
- Chinese context: 核芯 (core/seed)

---

## 3. User Onboarding Flow

### Screen 1 — What is Kern?
> *"Kern collects news from your chosen sources and uses AI to filter only what matters to you. To do this, Kern uses **your own AI account** — no subscriptions, no hidden fees. You provide the API key, Kern does the rest."*

### Screen 2 — API Key Setup (MANDATORY FIRST STEP)
> *"You'll need an API key from an AI provider. This costs roughly ¥10-30 per month depending on usage — about the price of a coffee."*

| Provider | Est. Cost/Month | Best For |
|----------|----------------|----------|
| OpenAI (GPT-4o mini) | ~$2-5 | English-heavy, fast |
| Anthropic (Claude Haiku) | ~$1-3 | English, large context |
| DeepSeek | ~¥5-15 | Chinese content, cheapest |
| Local model (Ollama) | Free | Privacy-first, needs setup |

- [Paste API key...]
- [Help me get a key ▸] → opens step-by-step guide

### Screen 3 — Template Gallery
Pre-built profiles the user can pick and customize:

| Template | Sources | For |
|----------|---------|-----|
| 🧑‍💻 Tech Radar | OpenAI, Google, Meta blogs, HN, r/MachineLearning | Tech enthusiasts |
| 📈 Market Moves | Major indices, stock watchlist, Fed/ECB decisions | Finance readers |
| 🎨 Creative Pulse | Adobe, Figma, Behance, Dribbble, design blogs | Designers |
| 🎮 Game Launcher | Major studios, Steam, console news, esports | Gamers |
| 🔬 Science Feed | Nature, Science, arXiv highlights | Science followers |
| 🌍 World Brief | Reuters, AP, BBC, policy changes | News readers |
| 📺 Creator Watch | YouTube channels, podcast feeds | Content followers |
| 🪄 Custom | Start from scratch | Power users |

### Screen 4 — Fine-Tune Delivery
For each template:
- Important news → **instant notification** (desktop alert)
- Routine news → **daily digest** (in-app or email summary)
- Never → just archive for when I feel like browsing

### Screen 5 — Done. Preview.
A sample "filter card" showing how a notification will look, with the filter trace visible.

---

## 4. Architecture (Multi-Agent System)

```
┌─────────────────────────────────────────────────────────┐
│                      KERN DESKTOP APP                    │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐             │
│  │ COLLECTOR│──▶│   FILTER │──▶│ DELIVERY │             │
│  │ Agents   │   │   Agents │   │ Agents   │             │
│  └──────────┘   └──────────┘   └──────────┘             │
│       │              │              │                    │
│       ▼              ▼              ▼                    │
│  ┌─────────────────────────────────────┐                │
│  │         TRANSPARENT LOG             │                │
│  │  (every decision is recorded)       │                │
│  └─────────────────────────────────────┘                │
│                                                          │
│  ┌─────────────────────────────────────┐                │
│  │         USER PROFILE (local)        │                │
│  │  - Topics, sources, frequency       │                │
│  │  - Feedback history ("not relevant")│                │
│  └─────────────────────────────────────┘                │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### The Agents

**Collector Agents** — each source type has its own collector:
- RSS/Atom feeds → standard feed parser
- Blog/website → HTML-to-text extractor (readability)
- YouTube channels → YouTube RSS/API
- Social media → public RSS bridges (RSSHub, Nitter, etc.)

**Filter Agents** — using the user's LLM API key:
1. **Relevance Scorer** — "Score this article for Jack's profile: 0-10"
2. **Summarizer** — "Summarize in 2 sentences, include source URL"
3. **Deduplicator** — "This is already in today's digest, skip"
4. **Urgency Classifier** — "Instant notification or daily digest?"

**Delivery Agents**:
- Desktop notification (system tray)
- In-app feed / digest view
- (Future: email, Telegram, Discord webhook)

**Explainer Agent** — responds to "Why this?" clicks:
- Shows the filter trace: score breakdown, which filter passed, source trust level

### The Filter Trace (Trust Building)

Every item has a visible card showing:

```
Filter trace:
✓ Source trusted (official blog)          [trust score: 9/10]
✓ Topic match: AI models                  [relevance: 9/10]
✓ Cross-checked: confirmed by 3 sources   [confidence: high]
✓ Urgency: high → instant notify
```

---

## 5. Content Policy (Hard Boundaries)

| Type | Accessible? | Method |
|------|------------|--------|
| Public RSS feeds | ✅ Yes | Standard feed parsing |
| Official blogs | ✅ Yes | Readability extraction |
| Free news sites | ✅ Yes | With source attribution |
| Social media (public) | ⚠️ Via RSS bridges | Fragile, no guarantee |
| Paywalled content | ❌ No | User should subscribe directly |
| Login-gated content | ❌ No | ToS violation risk |
| Illegal content | 🚫 Built-in refusal | Tool refuses to access |
| NSFW / adult | ❌ Out of scope | Keeps Kern distributable |

---

## 6. Transparency Principles

1. **Every notification shows its source** — full URL, not a summary
2. **Every filter decision is visible** — "why this was picked for you"
3. **User can say "not relevant"** — and the profile learns
4. **API usage is visible** — "this month's cost: ¥12.50"
5. **No dark patterns** — no engagement metrics, no infinite scroll, no ads

---

## 7. Tech Stack (TBD, for next phase)

Likely candidates:
- **Frontend**: Tauri (Rust + webview) — lightweight, cross-platform, native notifications
- **Backend logic**: Rust or Go or Python for collector agents
- **Local storage**: SQLite for user profile + article cache
- **LLM calls**: HTTP requests to user's chosen API provider

---

## 8. Open Questions (For Implementation Planning)

1. Tech stack confirmation — Tauri vs Electron vs something else?
2. First release: Windows only? macOS? Linux?
3. Language: English-first with Chinese i18n, or Chinese-first?
4. Should there be a "free tier" with a shared API key for trial (at cost to you)?
5. How to handle source discovery — allow users to add any URL and Kern detects feed type?