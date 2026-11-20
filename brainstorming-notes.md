# Brainstorming Notes: "Filter" — Information Collection & Filtering Desktop App

## Session Context
- **Date:** 2026-10-12
- **User:** A Chinese native speaker who wants a visual, trustworthy information aggregation tool
- **Status:** Early concept design phase (architectural path)

## Core Vision

A desktop app called **"Filter"** with tagline: *"Let it flow in, let the noise filter out."*

The app helps regular people (not just developers) collect announcements/news from sources they care about, filter them with AI, and deliver timely, trustworthy information — without doom-scrolling social media.

## Key Requirements So Far

### 1. Desktop App (Visual + Accessible)
- Anyone can use it, including code beginners
- GUI-based, readable, intuitive

### 2. Bring Your Own API Key
- No server costs for the creator
- Users provide their own LLM API key (OpenAI/Anthropic/etc.)

### 3. Natural Language as the Interface
- The app talks to the user in plain language
- User configures and talks to the app like a conversation
- **"Multi-agent" architecture:** different agents handle different tasks, and agents can ask the user for help/clarification
- Example: a new user doesn't know what "sources" are → an onboarding agent guides them with templates
- Example: user asks "does the agent summarize info every day?" → the app explains in natural language

### 4. Transparent Filtering (Build Trust)
- Users see the filtering process, not just the result
- Show "why this news is relevant to you" as a card/story
- Visible filter stages (e.g., "passed 3 filters: LLM score>2/5 → fact-check → topic profile match")
- Builds trust: "I see how this was selected, I believe it"

### 5. Multi-Source Collection
- RSS feeds, blog posts, newsletters, social media, etc.
- Not limited to tech — finance, design tools, gaming, anything

### 6. Multi-Language Support
- UI and content in multiple languages
- Chinese + English at minimum

### 7. Customizable Delivery
- Important news → instant notification
- Daily/weekly digests
- User controls frequency

### 8. Source Attribution
- Every filtered result shows its original source/URL
- User can verify

## Information Flow (current understanding)

Sources → Collector → AI Filter (Score) → Fact Checker → Profile Matcher → Delivery

Each stage visible to the user.

## Open Questions

- What tech stack? (Tauri/Rust for lightweight? Electron for faster prototyping?)
- How does the "multi-agent" architecture actually work? (Local agents? API calls per agent?)
- Source types: scraping engine? RSS reader? API integrations?
- Fact-checking: how deep? Cross-reference multiple sources? Or just "does this look fake"?
- Delivery mechanism: system notifications? In-app feed? Email? All three?
- Profile system: how does the user define topics of interest?