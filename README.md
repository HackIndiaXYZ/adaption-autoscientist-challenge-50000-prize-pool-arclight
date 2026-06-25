# MarketMind AI — Complete Project Blueprint

> Dual submission: AI for Marketers Hackathon + AutoScientist Challenge × HackIndia (Marketing track)
> Built by: Deven Goyal · Chandigarh University

---

## THE MASTER BUILD PROMPT

Copy this entire prompt when starting the project with Claude Code, your team, or any AI assistant.

---

```
PROJECT: MarketMind AI — The First Fine-Tuned Marketing Intelligence Platform

You are building a dual-submission hackathon project:
1. AI for Marketers Hackathon — deployable SaaS product
2. AutoScientist Challenge × HackIndia — Marketing track, fine-tuned open model

This is not just another GPT wrapper. The unique technical moat is a domain-specialized
marketing AI model trained via Adaption's AutoScientist platform, wrapped inside a
polished full-stack SaaS product.

════════════════════════════════════════════
PART 1 — THE MODEL (AutoScientist Submission)
════════════════════════════════════════════

GOAL: Train a fine-tuned marketing intelligence model that beats the Adaption baseline
on the Marketing category test set.

── DATASET CONSTRUCTION ──

Generate a labeled marketing dataset of 12,000 samples across these dimensions:

Content types (generate equal distribution):
- Email subject lines
- Email body copy (first 150 words)
- Google Search ad headlines + descriptions
- LinkedIn post copy
- Instagram caption copy
- X (Twitter) post copy
- Landing page hero headlines + subheadlines
- CTA button text
- SMS marketing messages
- Push notification copy

Industries (1,000 samples each):
- SaaS / tech products
- E-commerce / fashion
- Healthcare / wellness
- EdTech / online courses
- Real estate
- Food & beverage
- Financial services
- Travel & hospitality
- B2B services
- Fitness & gym
- Non-profit fundraising
- Consumer electronics

Labels per sample:
- quality_score: integer 1–10
- performance_tier: "low" | "medium" | "high"
- ctr_prediction: float 0.0–1.0 (normalized)
- emotional_trigger: "urgency" | "curiosity" | "social_proof" | "fear_of_missing_out" |
  "authority" | "scarcity" | "value" | "none"
- readability_grade: integer 6–16 (Flesch-Kincaid grade level)
- word_count: integer
- has_cta: boolean
- has_number: boolean
- has_question: boolean
- optimized_version: string (AI-rewritten improved version)
- improvement_reason: string (1-2 sentences explaining what was wrong)

Dataset generation prompt to use with Claude:
"You are a senior performance marketing expert with 15 years of experience running
campaigns for Fortune 500 brands. Generate 20 marketing copy samples for the
[INDUSTRY] industry, content type: [CONTENT_TYPE].

For each sample generate both a LOW quality version (score 1-4) and a HIGH quality
version (score 7-10) for the same product/offer.

Return ONLY valid JSON array, no preamble, no markdown backticks:
[{
  'text': '...',
  'industry': '...',
  'content_type': '...',
  'quality_score': N,
  'performance_tier': '...',
  'ctr_prediction': 0.XX,
  'emotional_trigger': '...',
  'readability_grade': N,
  'word_count': N,
  'has_cta': true/false,
  'has_number': true/false,
  'has_question': true/false,
  'optimized_version': '...',
  'improvement_reason': '...'
}]"

Run this prompt 600 times (12 industries × 10 content types × 5 batches of 20)
= 12,000 samples total.

── ADAPTION PLATFORM STEPS ──

Step 1: Upload dataset to Adaptive Data platform
Step 2: Use Adaptive Data's 242-language augmentation to expand dataset by 40%
        (focus on Hindi, Spanish, Portuguese, French for global marketing relevance)
Step 3: Use AutoScientist to run the full training loop:
        - Model objective: marketing copy quality scoring + optimization
        - Primary metric: Spearman correlation between predicted and actual quality scores
        - Secondary metric: accuracy of performance_tier classification
Step 4: Iterate on dataset quality until model shows >15% improvement over baseline
Step 5: Publish to Hugging Face as: [your-username]/marketmind-marketing-v1

── HUGGING FACE MODEL CARD ──

See the README section below for the complete model card template.

── KAGGLE DATASET RELEASE ──

Publish dataset as: [your-username]/marketing-copy-intelligence-12k
Include: CSV file, data dictionary, generation methodology notebook

════════════════════════════════════════════
PART 2 — THE PRODUCT (AI for Marketers Submission)
════════════════════════════════════════════

TECH STACK:
- Framework: Next.js 14 (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS + shadcn/ui components
- Database: Supabase (PostgreSQL + auth + storage)
- AI: Claude API (claude-sonnet-4-6) + Hugging Face Inference API (your own model)
- Charts: Recharts
- Export: jsPDF + xlsx
- Deployment: Vercel
- Email: Resend

FILE STRUCTURE:
marketmind/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx          ← sidebar nav
│   │   ├── dashboard/page.tsx  ← overview metrics
│   │   ├── forge/page.tsx      ← Campaign Forge
│   │   ├── scorer/page.tsx     ← Copy Scorer
│   │   ├── personas/page.tsx   ← Persona Engine
│   │   ├── roi/page.tsx        ← ROI Predictor
│   │   ├── spy/page.tsx        ← Competitor Spy
│   │   └── history/page.tsx    ← saved campaigns
│   ├── api/
│   │   ├── forge/route.ts
│   │   ├── score/route.ts
│   │   ├── personas/route.ts
│   │   ├── roi/route.ts
│   │   └── export/route.ts
│   ├── layout.tsx
│   └── page.tsx                ← landing page
├── components/
│   ├── ui/                     ← shadcn components
│   ├── forge/
│   │   ├── BriefForm.tsx
│   │   ├── CampaignOutput.tsx
│   │   ├── ContentCard.tsx
│   │   └── ExportButton.tsx
│   ├── scorer/
│   │   ├── ScoreInput.tsx
│   │   ├── ScoreGauge.tsx
│   │   └── RewritePanel.tsx
│   ├── personas/
│   │   ├── PersonaCard.tsx
│   │   └── PersonaGrid.tsx
│   ├── roi/
│   │   ├── FunnelChart.tsx
│   │   ├── ROICard.tsx
│   │   └── ChannelBreakdown.tsx
│   └── shared/
│       ├── Sidebar.tsx
│       ├── Header.tsx
│       └── LoadingState.tsx
├── lib/
│   ├── claude.ts               ← Claude API client
│   ├── hf.ts                   ← Hugging Face API client
│   ├── supabase.ts
│   └── prompts.ts              ← all system prompts
├── types/
│   └── index.ts
└── public/

────────────────────────────────────────────
MODULE 1: CAMPAIGN FORGE
────────────────────────────────────────────

Route: /forge
Description: Generate a complete multi-channel marketing campaign from a single brief.

Input form fields:
- Brand name (text)
- Product/service description (textarea, max 300 chars)
- Target audience (text, e.g. "remote workers aged 25-40")
- Campaign goal (select: Brand Awareness / Lead Generation / Sales Conversion /
  App Downloads / Event Registrations)
- Tone (select: Professional / Friendly / Urgent / Inspirational / Witty)
- Budget tier (select: Bootstrapped <$1K / Growth $1K-$10K / Scale $10K+)

Claude API prompt (in lib/prompts.ts):

const FORGE_SYSTEM = `You are MarketMind, a world-class marketing strategist and
copywriter. You generate complete, high-converting marketing campaigns.
Always return valid JSON only. No markdown, no preamble.`

const forgePrompt = (input) => `
Generate a complete marketing campaign for:
Brand: ${input.brand}
Product: ${input.product}
Audience: ${input.audience}
Goal: ${input.goal}
Tone: ${input.tone}
Budget: ${input.budget}

Return this exact JSON structure:
{
  "campaign_name": "string",
  "campaign_tagline": "string",
  "emails": [
    {
      "type": "cold_outreach" | "follow_up" | "nurture" | "conversion",
      "subject_line": "string",
      "preview_text": "string",
      "body": "string (150-200 words)",
      "cta": "string"
    }
  ] (3 emails),
  "social_posts": [
    {
      "platform": "linkedin" | "instagram" | "twitter" | "facebook",
      "copy": "string",
      "hashtags": ["string"],
      "best_posting_time": "string"
    }
  ] (2 LinkedIn, 2 Instagram, 2 Twitter, 1 Facebook),
  "google_ads": [
    {
      "headline_1": "string (max 30 chars)",
      "headline_2": "string (max 30 chars)",
      "headline_3": "string (max 30 chars)",
      "description_1": "string (max 90 chars)",
      "description_2": "string (max 90 chars)",
      "display_url": "string"
    }
  ] (3 ad variants),
  "blog_post": {
    "title": "string",
    "meta_description": "string (max 160 chars)",
    "outline": [
      {"heading": "string", "key_points": ["string"]}
    ] (5 sections),
    "intro_hook": "string (2-3 sentences)"
  },
  "sms_messages": ["string"] (3 SMS, max 160 chars each),
  "push_notifications": [
    {"title": "string (max 50 chars)", "body": "string (max 100 chars)"}
  ] (2 notifications),
  "content_hooks": ["string"] (5 video/reel hook ideas),
  "ab_test_recommendation": {
    "element_to_test": "string",
    "variant_a": "string",
    "variant_b": "string",
    "hypothesis": "string"
  },
  "campaign_calendar": [
    {"day": N, "channel": "string", "action": "string"}
  ] (30-day plan, one action per day)
}
`

UI output: Tabbed interface with tabs for Emails, Social, Ads, Blog, SMS, Calendar.
Each content item has a Copy button, a Score button (calls the scorer module),
and an Edit button (inline text edit). Export All button at top right.

────────────────────────────────────────────
MODULE 2: COPY SCORER (THE UNIQUE DIFFERENTIATOR)
────────────────────────────────────────────

Route: /scorer
Description: Score any marketing copy using your fine-tuned model + Claude for
detailed reasoning. This is the ONLY module in the hackathon powered by a
custom-trained domain model. Make this very clear in demos.

Input: Textarea for pasting any marketing copy (email, ad, landing page, social post)
       Dropdown: content type + industry (optional, improves accuracy)

API flow (in app/api/score/route.ts):

Step 1 — Call your fine-tuned Hugging Face model:
  POST https://api-inference.huggingface.co/models/[your-username]/marketmind-marketing-v1
  Body: { inputs: copyText }
  Returns: quality_score, performance_tier, ctr_prediction, emotional_trigger

Step 2 — Call Claude API for detailed analysis:
  System: "You are a marketing performance analyst."
  User: `Analyze this marketing copy and provide detailed improvement suggestions.
         Initial model scores: ${hfResult}
         Copy: ${copyText}
         Return JSON: {
           strengths: ["string"] (3 items),
           weaknesses: ["string"] (3 items),
           missing_elements: ["string"],
           emotional_appeal_score: N (1-10),
           clarity_score: N (1-10),
           urgency_score: N (1-10),
           rewritten_version: "string",
           rewrite_explanation: "string"
         }`

UI: Animated score gauge (0-10 arc), color-coded (red 0-4, amber 5-6, green 7-10),
    side-by-side original vs rewritten, strengths/weaknesses cards, copy improvement
    history (stored in Supabase).

Show badge: "Powered by MarketMind fine-tuned model" — judges love this.

────────────────────────────────────────────
MODULE 3: PERSONA ENGINE
────────────────────────────────────────────

Route: /personas
Description: Generate detailed buyer personas with tailored messaging per segment.

Input: product description + industry + campaign goal

Claude prompt returns JSON:
{
  "personas": [
    {
      "name": "string (fictional name)",
      "age_range": "string",
      "job_title": "string",
      "income_range": "string",
      "location_type": "urban" | "suburban" | "rural",
      "pain_points": ["string"] (3),
      "goals": ["string"] (3),
      "preferred_channels": ["string"] (top 3),
      "content_preferences": "string",
      "buying_triggers": ["string"] (3),
      "objections": ["string"] (2),
      "tailored_message": "string (2-3 sentences, write as if speaking directly to them)",
      "best_ad_format": "string",
      "estimated_cac": "string (e.g. $45-80)",
      "lifetime_value_potential": "low" | "medium" | "high"
    }
  ] (4 distinct personas)
}

UI: Grid of persona cards. Each card is expandable. Include a "Generate campaign for
this persona" button that pre-fills the Forge module.

────────────────────────────────────────────
MODULE 4: ROI PREDICTOR
────────────────────────────────────────────

Route: /roi
Description: Forecast campaign performance before spending a dollar.

Inputs:
- Monthly ad budget ($)
- Target industry
- Campaign goal
- Primary channel (Google / Meta / LinkedIn / Email / Organic)
- Current monthly website traffic

Claude returns JSON with realistic estimates:
{
  "summary": {
    "estimated_reach": N,
    "estimated_clicks": N,
    "estimated_leads": N,
    "estimated_conversions": N,
    "estimated_revenue": N,
    "roi_multiplier": N (e.g. 3.4 = 340% ROI),
    "payback_period_days": N,
    "cost_per_lead": N,
    "cost_per_acquisition": N
  },
  "funnel_stages": [
    {"stage": "Impressions", "count": N, "drop_rate": 0.XX},
    {"stage": "Clicks", "count": N, "drop_rate": 0.XX},
    {"stage": "Landing page visits", "count": N, "drop_rate": 0.XX},
    {"stage": "Leads captured", "count": N, "drop_rate": 0.XX},
    {"stage": "Sales qualified", "count": N, "drop_rate": 0.XX},
    {"stage": "Conversions", "count": N, "drop_rate": null}
  ],
  "channel_breakdown": [
    {"channel": "string", "budget_allocation": 0.XX, "expected_roi": N}
  ],
  "recommendations": ["string"] (3 optimization tips),
  "risk_factors": ["string"] (2 items)
}

UI: Animated funnel chart (Recharts), ROI gauge, channel allocation pie chart,
    summary metric cards with before/after comparison.

────────────────────────────────────────────
MODULE 5: COMPETITOR SPY
────────────────────────────────────────────

Route: /spy
Description: Paste competitor's ad copy. Get a score + a better version.
This is the most demo-friendly feature. Judges love seeing a rival's ad
scored low and immediately countered.

Input: Competitor's ad copy + their industry/product type (optional)
Output:
- Score of competitor's copy (using your fine-tuned model)
- What they're doing well
- What they're missing
- Your counter-copy: a better version targeting the same audience
- Strategic insight: why your version would outperform

Claude prompt:
"Analyze this competitor's marketing copy as a senior CMO.
 Score it ruthlessly. Then write a superior competing version.
 Return JSON: {
   competitor_score: N,
   competitor_analysis: {
     strengths: [],
     critical_weaknesses: [],
     missed_opportunities: []
   },
   counter_copy: 'string',
   counter_copy_score: N,
   strategic_insight: 'string',
   why_ours_wins: 'string'
 }"

UI: Split screen — competitor (red-tinted) vs yours (green-tinted).
    Score comparison with animated delta indicator.

────────────────────────────────────────────
MODULE 6: EXPORT ENGINE
────────────────────────────────────────────

Every module's output can be exported as:
- PDF (branded, professional layout using jsPDF)
- Markdown (for developers / GitHub)
- CSV (for data, ad uploads to Google Ads / Meta)
- Copy to clipboard

────────────────────────────────────────────
LANDING PAGE
────────────────────────────────────────────

Hero section:
- Headline: "Your entire marketing team. Powered by AI."
- Subheadline: "MarketMind generates campaigns, scores your copy with a fine-tuned
  AI model, predicts ROI, and counters your competitors — in under 2 minutes."
- CTA: "Generate your first campaign free" (no credit card)
- Social proof: "Built with Claude · Fine-tuned on 12,000 marketing samples"

Stats section (animated counters):
- 12,000+ marketing copy samples trained on
- 60 seconds to generate a full campaign
- 5 AI-powered modules
- 10+ content formats per campaign

Demo section: Embed a 90-second Loom demo video

How it works: 3-step visual (Brief → AI generates → Export & launch)

Technical credibility section:
- "Powered by a fine-tuned model published on Hugging Face"
- Link to Hugging Face model page
- Link to Kaggle dataset
- "Built with Adaption AutoScientist"

────────────────────────────────────────────
SUPABASE SCHEMA
────────────────────────────────────────────

Table: users
- id (uuid, PK)
- email (text)
- created_at (timestamp)
- plan (text: 'free' | 'pro')
- campaigns_generated (int, default 0)

Table: campaigns
- id (uuid, PK)
- user_id (uuid, FK → users)
- created_at (timestamp)
- brand_name (text)
- campaign_name (text)
- brief (jsonb)
- output (jsonb)
- exported_at (timestamp, nullable)

Table: scores
- id (uuid, PK)
- user_id (uuid, FK → users)
- created_at (timestamp)
- original_copy (text)
- content_type (text)
- industry (text)
- model_score (float)
- analysis (jsonb)
- rewritten_copy (text)

────────────────────────────────────────────
ENVIRONMENT VARIABLES
────────────────────────────────────────────

ANTHROPIC_API_KEY=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
HUGGINGFACE_API_TOKEN=
HF_MODEL_ENDPOINT=https://api-inference.huggingface.co/models/[username]/marketmind-marketing-v1
RESEND_API_KEY=

────────────────────────────────────────────
EXECUTION TIMELINE
────────────────────────────────────────────

Day 1 (June 25):
  ✅ Sign up at adaptionlabs.ai + join Discord
  ✅ Join hackathon WhatsApp channel
  ✅ Generate first 2,000 dataset samples using Claude
  ✅ Set up Next.js project + Supabase + Vercel

Day 2 (June 26):
  ✅ Complete full 12,000 sample dataset
  ✅ Upload to Adaptive Data, run augmentation
  ✅ Begin AutoScientist training run
  ✅ Build Campaign Forge module

Day 3 (June 27):
  ✅ Monitor training, iterate dataset if needed
  ✅ Build Copy Scorer module (both APIs)
  ✅ Build Persona Engine module

Day 4 (June 28):
  ✅ Model converges, publish to Hugging Face + Kaggle
  ✅ Build ROI Predictor + Competitor Spy modules
  ✅ Connect HF model to Copy Scorer

Day 5 (June 29):
  ✅ Build landing page
  ✅ Polish UI, mobile responsive check
  ✅ Record 90-second demo video (Loom)
  ✅ Build pitch deck (10 slides)

Day 6 (June 30):
  ✅ Full QA testing
  ✅ Write model card
  ✅ Post on LinkedIn + X tagging @adaption_ai
  ✅ Submit to AutoScientist (deadline July 5)
  ✅ Submit to AI for Marketers hackathon

────────────────────────────────────────────
PITCH DECK OUTLINE (10 slides)
────────────────────────────────────────────

Slide 1 — Title: MarketMind AI · The Marketing Brain
Slide 2 — Problem: Marketing teams spend 15+ hours building campaigns. Copy is untested. ROI is guesswork.
Slide 3 — Solution: One platform. Campaign generation + AI copy scoring + ROI prediction.
Slide 4 — The Tech Moat: Fine-tuned model on 12,000 marketing samples. Not a GPT wrapper.
Slide 5 — Product demo screenshots (5 key screens)
Slide 6 — ROI impact: 15 hours → 2 minutes. $800 → $0 per campaign.
Slide 7 — Market size: $1.3T global marketing spend. AI marketing tools: fastest growing SaaS category.
Slide 8 — How we built it: AutoScientist + Adaptive Data + Claude + Next.js
Slide 9 — Open source model: Hugging Face link + benchmark improvement proof
Slide 10 — What's next: Team introduction + ask
```

---

# README.md

```markdown
# MarketMind AI

**The first fine-tuned marketing intelligence platform.**

MarketMind combines a domain-specialized AI model (trained on 12,000 marketing copy
samples via Adaption's AutoScientist) with a full-stack SaaS product that generates
campaigns, scores copy, predicts ROI, and counters competitors.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-marketmind.vercel.app-blue)](https://marketmind.vercel.app)
[![Model on HF](https://img.shields.io/badge/Model-HuggingFace-orange)](https://huggingface.co/Devengoyal885/marketmind-marketing-v1)
[![Dataset on Kaggle](https://img.shields.io/badge/Dataset-Kaggle-20beff)](https://www.kaggle.com/datasets/devengoyal885/marketing-copy-intelligence-12k)
[![Built with Claude](https://img.shields.io/badge/Built%20with-Claude%20Sonnet%204.6-purple)](https://anthropic.com)
[![AutoScientist](https://img.shields.io/badge/Trained%20with-AutoScientist%20by%20Adaption-green)](https://adaptionlabs.ai)

---

## The Problem

Marketing teams spend 15+ hours building a single campaign. Copy quality is untested
before launch. ROI is guesswork. Off-the-shelf AI models hallucinate marketing best
practices and don't understand industry-specific conversion patterns.

**The result:** Wasted ad spend, low-converting copy, and campaigns that miss their audience.

---

## The Solution

MarketMind is a two-layer system:

**Layer 1 — The Model:** A fine-tuned marketing intelligence model trained on 12,000
labeled marketing copy samples across 12 industries and 10 content types. It predicts
copy quality, CTR tier, emotional trigger used, and generates optimized rewrites.
Published openly on Hugging Face and Kaggle.

**Layer 2 — The Product:** A full-stack SaaS platform with 5 AI-powered modules:
Campaign Forge, Copy Scorer, Persona Engine, ROI Predictor, and Competitor Spy.

---

## Live Demo

[marketmind.vercel.app](https://marketmind.vercel.app)

Demo walkthrough (90 seconds): [Loom link]

---

## Features

### 1. Campaign Forge
Generate a complete multi-channel marketing campaign from a single brief.

Input: brand name, product description, audience, goal, tone, budget  
Output: 3 emails · 7 social posts · 3 Google ad variants · 1 blog outline ·
3 SMS messages · 2 push notifications · 5 video hooks · 30-day calendar

Time to generate: under 60 seconds.

### 2. Copy Scorer ⭐ (Unique Feature)
The only module in this hackathon powered by a custom-trained domain model.

Paste any marketing copy → our fine-tuned model returns:
- Quality score (1–10)
- Performance tier prediction
- CTR estimate
- Emotional trigger detected

Claude then provides: strengths, weaknesses, missing elements, and a full rewrite.

### 3. Persona Engine
Generate 4 detailed buyer personas with tailored messaging, preferred channels,
buying triggers, objections, estimated CAC, and lifetime value potential.

### 4. ROI Predictor
Input your budget and campaign parameters. Get a full funnel forecast:
impressions → clicks → leads → conversions → revenue. Includes channel
allocation recommendations and payback period estimate.

### 5. Competitor Spy
Paste a competitor's ad copy. Get their score, their weaknesses, and a superior
counter-version — before spending a dollar.

---

## Architecture

```text
┌─────────────────────────────────────────────────────┐
│              MODEL LAYER (AutoScientist)             │
│                                                     │
│  12K labeled samples → Adaptive Data augmentation  │
│  → AutoScientist training loop → HF model release  │
└─────────────────────────┬───────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────┐
│             PRODUCT LAYER (Next.js SaaS)            │
│                                                     │
│  Campaign Forge  │  Copy Scorer  │  Persona Engine  │
│  ROI Predictor   │  Competitor Spy                  │
│                                                     │
│  Claude API (claude-sonnet-4-6)                     │
│  HF Inference API (marketmind-marketing-v1)         │
│  Supabase · Vercel · Recharts                       │
└─────────────────────────────────────────────────────┘
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14 (App Router) · TypeScript · Tailwind CSS · shadcn/ui |
| Backend | Next.js API Routes |
| Primary AI | Claude API (claude-sonnet-4-6) |
| Domain Model | Custom fine-tuned model via Adaption AutoScientist |
| Model Hosting | Hugging Face Inference API |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| Charts | Recharts |
| Export | jsPDF · XLSX |
| Deployment | Vercel |

---

## The Model

**Model:** `Devengoyal885/marketmind-marketing-v1`  
**Trained with:** Adaption AutoScientist  
**Training data:** 12,000 labeled marketing copy samples  
**Languages:** English + Hindi, Spanish, Portuguese, French (via Adaptive Data augmentation)  
**Task:** Marketing copy quality scoring + performance tier classification + optimization  
**Baseline improvement:** [X]% improvement on Adaption's marketing category test set  

### Dataset

**Dataset:** `devengoyal885/marketing-copy-intelligence-12k` on Kaggle  

| Dimension | Details |
|-----------|---------|
| Total samples | 12,000 |
| Industries | 12 (SaaS, e-commerce, healthcare, edtech, real estate, F&B, finance, travel, B2B, fitness, non-profit, electronics) |
| Content types | 10 (email subjects, email body, Google ads, LinkedIn, Instagram, Twitter, landing pages, CTAs, SMS, push notifications) |
| Labels | quality_score, performance_tier, ctr_prediction, emotional_trigger, readability_grade, word_count, has_cta, has_number, has_question, optimized_version, improvement_reason |
| Languages | English (primary), Hindi, Spanish, Portuguese, French (augmented) |
| Generation method | Claude-generated synthetic data with domain expert review criteria |

---

## ROI Impact

| Metric | Without MarketMind | With MarketMind |
|--------|--------------------|-----------------|
| Campaign creation time | 12–15 hours | < 2 minutes |
| Copy quality check | Manual/intuition | AI-scored before launch |
| Cost per campaign | $800–1,200 (agency) | Near zero |
| ROI visibility | Post-spend only | Pre-spend forecast |
| Channels covered | 2–3 typically | 7+ simultaneously |

---

## Getting Started

### Prerequisites

- Node.js 18+
- Supabase account
- Anthropic API key
- Hugging Face account + API token
- Vercel account (for deployment)

### Installation

```bash
git clone https://github.com/Devengoyal885/marketmind-ai
cd marketmind-ai
npm install
```

### Environment Variables

Create `.env.local`:

```env
ANTHROPIC_API_KEY=your_key_here
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
HUGGINGFACE_API_TOKEN=your_hf_token
HF_MODEL_ENDPOINT=https://api-inference.huggingface.co/models/Devengoyal885/marketmind-marketing-v1
```

### Database Setup

Run in Supabase SQL editor:

```sql
create table users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamp with time zone default now(),
  plan text default 'free',
  campaigns_generated int default 0
);

create table campaigns (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  created_at timestamp with time zone default now(),
  brand_name text,
  campaign_name text,
  brief jsonb,
  output jsonb,
  exported_at timestamp with time zone
);

create table scores (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  created_at timestamp with time zone default now(),
  original_copy text,
  content_type text,
  industry text,
  model_score float,
  analysis jsonb,
  rewritten_copy text
);
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Deploy

```bash
vercel --prod
```

---

## Project Structure

```text
marketmind/
├── app/
│   ├── (auth)/login/ and /signup/
│   ├── (dashboard)/
│   │   ├── forge/          ← Campaign Forge
│   │   ├── scorer/         ← Copy Scorer (fine-tuned model)
│   │   ├── personas/       ← Persona Engine
│   │   ├── roi/            ← ROI Predictor
│   │   └── spy/            ← Competitor Spy
│   ├── api/
│   │   ├── forge/route.ts
│   │   ├── score/route.ts  ← calls HF model + Claude
│   │   ├── personas/route.ts
│   │   ├── roi/route.ts
│   │   └── export/route.ts
│   └── page.tsx            ← landing page
├── components/
│   ├── forge/
│   ├── scorer/
│   ├── personas/
│   ├── roi/
│   ├── spy/
│   └── shared/
├── lib/
│   ├── claude.ts
│   ├── hf.ts               ← Hugging Face client
│   ├── supabase.ts
│   └── prompts.ts
└── types/index.ts
```

---

## Hackathon Submissions

### AI for Marketers Hackathon
- Track: Marketing Automation + AI Content Engine + Customer Insights
- Deliverables: Working product · Demo video · Campaign assets · ROI metrics · Pitch deck

### AutoScientist Challenge × HackIndia
- Track: Marketing (Part 1, due July 5)
- Deliverables: Fine-tuned model on HF · Dataset on Kaggle · Model card · Benchmark proof
- HackIndia eligibility: Chandigarh University student ✅

---

## Open Source

Model weights: [Hugging Face](https://huggingface.co/Devengoyal885/marketmind-marketing-v1)  
Training dataset: [Kaggle](https://www.kaggle.com/datasets/devengoyal885/marketing-copy-intelligence-12k)  
Source code: [GitHub](https://github.com/Devengoyal885/marketmind-ai)

---

## Team

**Deven Goyal** — Full Stack Developer · Chandigarh University  
[LinkedIn](https://www.linkedin.com/in/deven-goyal/) · [GitHub](https://github.com/Devengoyal885) · [Portfolio](https://devengoyal.netlify.app)

---

## License

MIT License — see [LICENSE](LICENSE) for details.

The training dataset is released under CC BY 4.0.
The fine-tuned model is released under Apache 2.0.

---

*Built for the AI for Marketers Hackathon and AutoScientist Challenge × HackIndia 2025.*  
*Trained with Adaption AutoScientist · Powered by Claude (Anthropic)*
```

---

## HUGGING FACE MODEL CARD TEMPLATE

Publish this as your model's README on Hugging Face:

```markdown
---
license: apache-2.0
language:
- en
- hi
- es
- pt
- fr
tags:
- marketing
- copy-scoring
- text-classification
- text-generation
- fine-tuned
- autoscientist
- adaption
datasets:
- devengoyal885/marketing-copy-intelligence-12k
metrics:
- spearman_correlation
- accuracy
---

# marketmind-marketing-v1

A domain-specialized marketing intelligence model fine-tuned on 12,000 labeled
marketing copy samples across 12 industries and 10 content formats.

Trained using [Adaption AutoScientist](https://adaptionlabs.ai) as part of the
AutoScientist Challenge × HackIndia.

## What This Model Does

Given any marketing copy text, this model predicts:
- **Quality score** (1–10): Overall marketing effectiveness
- **Performance tier**: low / medium / high predicted performance
- **CTR prediction**: Normalized click-through rate estimate (0.0–1.0)
- **Emotional trigger**: urgency / curiosity / social_proof / fomo / authority /
  scarcity / value / none

## Benchmark Results

| Metric | Baseline | MarketMind v1 | Improvement |
|--------|----------|---------------|-------------|
| Quality score Spearman ρ | [X] | [Y] | +[Z]% |
| Tier classification accuracy | [X]% | [Y]% | +[Z]% |

Evaluated on Adaption's held-out marketing category test set.

## Usage

```python
import requests

API_URL = "https://api-inference.huggingface.co/models/Devengoyal885/marketmind-marketing-v1"
headers = {"Authorization": "Bearer YOUR_HF_TOKEN"}

def score_copy(text):
    response = requests.post(API_URL, headers=headers, json={"inputs": text})
    return response.json()

result = score_copy("Limited time offer: Get 50% off your first month. No commitment.")
print(result)
```

## Training Data

12,000 labeled marketing copy samples across:
- 12 industries
- 10 content types
- 5 languages (English primary, Hindi/Spanish/Portuguese/French via Adaptive Data)

Dataset: [devengoyal885/marketing-copy-intelligence-12k](https://www.kaggle.com/datasets/devengoyal885/marketing-copy-intelligence-12k)

## Training

Trained using [Adaption AutoScientist](https://adaptionlabs.ai), which automates
the full model research and training loop, co-optimizing data and training recipes
end-to-end.

## Intended Use

- Marketing copy quality assessment before launch
- A/B test variant selection
- Copy optimization and rewriting guidance
- CTR prediction for ad creative selection

## Limitations

- Trained primarily on English copy; other language performance may vary
- CTR predictions are relative estimates, not absolute values
- Performance varies by industry; best results on trained industries

## Citation

If you use this model, please cite:
Deven Goyal (2025). MarketMind Marketing Intelligence Model.
Trained with Adaption AutoScientist. AutoScientist Challenge × HackIndia.
```

---

## WHY THIS WINS — JUDGE SCORECARD

### AI for Marketers Hackathon

| Criterion | How MarketMind wins |
|-----------|---------------------|
| Working product | Live on Vercel, 5 full modules |
| AI as core component | Claude API + custom fine-tuned model |
| Solves real marketing problem | 12–15 hour campaigns → 2 minutes |
| ROI impact | Quantified: 99%+ time reduction, $800 → ~$0 per campaign |
| Original work | Custom model + product, not another GPT wrapper |
| Demo-ready | Live URL + 90-second Loom video |

### AutoScientist Challenge

| Criterion | How MarketMind wins |
|-----------|---------------------|
| Performance improvement | Fine-tuned on 12K domain samples → beats general baseline |
| Dataset quality & originality | Labeled across 12 industries × 10 content types × 5 labels |
| Real-world impact | Marketing is a $1.3T industry; copy quality is universally needed |
| AutoScientist usage depth | Full training loop, Adaptive Data augmentation, multi-language |
| Open release quality | Model card · HF weights · Kaggle dataset · GitHub source |
