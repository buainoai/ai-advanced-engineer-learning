# Generic Next.js Scaffold

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
