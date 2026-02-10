# Generic Next.js Scaffold

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbuainoai%2Fai-advanced-engineer-learning&env=NEXT_PUBLIC_GOOGLE_ADSENSE_ID,NEXT_PUBLIC_GA_ID&envDescription=Optional%20environment%20variables%20for%20Google%20AdSense%20and%20Analytics&envLink=https%3A%2F%2Fgithub.com%2Fbuainoai%2Fai-advanced-engineer-learning%23environment-setup&project-name=my-nextjs-app&repository-name=my-nextjs-app)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/buainoai/ai-advanced-engineer-learning)

A high-performance, modern web application scaffold built with:

- **Framework**: Next.js 16+ (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: Shadcn/UI (Radix Primitives)
- **Internationalization**: next-intl
- **Analytics**: Google Analytics 4 (Optional)
- **Monetization**: Google AdSense (Optional)

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    # or
    bun install
    ```

2.  **Environment Setup**:
    Copy `.env.example` to `.env` and fill in your keys.

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## Features

- **Responsive Design**: Mobile-first approach.
- **Dark Mode**: Built-in generic theme support.
- **i18n Ready**: Pre-configured for English (en) and Chinese (zh).
- **SEO Optimized**: Standard metadata and sitemap configuration.

## Directory Structure

- `src/app`: App Router pages and layouts.
- `src/components`: UI components (including LandingPage and generic UI elements).
- `src/lib`: Utility functions.
- `src/i18n`: Internationalization configuration.
- `messages`: Translation JSON files.

## Customization

- **Theme**: Edit `src/app/globals.css` to change CSS variables.
- **Components**: Add new components via `npx shadcn@latest add [component]`.
- **Content**: Update `messages/en|zh/*.json` for text content.
