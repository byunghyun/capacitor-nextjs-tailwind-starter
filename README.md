# Capacitor + Next.js + Tailwind CSS Starter

A minimal starter template for building cross-platform mobile apps with **Next.js 16**, **Capacitor 8**, and **Tailwind CSS 4**. Write your app once with React 19 and deploy to iOS, Android, and the web.

## Tech Stack

- **Next.js 16** - App Router with static export
- **React 19** - Latest React with concurrent features
- **Capacitor 8** - Native iOS & Android runtime
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript 5** - Type-safe development
- **pnpm** - Fast, disk space efficient package manager

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development)
- [Android Studio](https://developer.android.com/studio) (for Android development)

## Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/byunghyun/capacitor-nextjs-tailwind-starter.git
cd capacitor-nextjs-tailwind-starter
pnpm install
```

### 2. Configure Environment

Create a `.env` file in the project root:

```env
CAPACITOR_LIVE_RELOAD=false
CAPACITOR_DEV_IP=<your-local-ip>
CAPACITOR_DEV_PORT=3000
```

Replace `<your-local-ip>` with your machine's local IP address (e.g., `192.168.0.10`). This is required for live reload on physical devices.

### 3. Run

```bash
# Web only
pnpm dev

# iOS with live reload
pnpm dev:ios

# Android with live reload
pnpm dev:android

# Both iOS and Android
pnpm dev:app
```

## Scripts

| Script | Description |
|---|---|
| `pnpm dev` | Start Next.js dev server |
| `pnpm dev:ios` | Launch iOS simulator with live reload |
| `pnpm dev:android` | Launch Android emulator with live reload |
| `pnpm dev:app` | Launch both iOS and Android with live reload |
| `pnpm build` | Build static export to `out/` |
| `pnpm lint` | Run ESLint |

## Project Structure

```
├── app/                # Next.js App Router pages
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles (Tailwind)
├── android/            # Android native project
├── ios/                # iOS native project
├── out/                # Static export output (build artifact)
├── public/             # Static assets
├── capacitor.config.ts # Capacitor configuration
├── next.config.ts      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
└── postcss.config.mjs  # PostCSS + Tailwind setup
```

## How It Works

1. Next.js is configured with `output: 'export'` to generate a fully static site in the `out/` directory
2. Capacitor uses the `out/` directory as its `webDir` to bundle the static site into native apps
3. During development, live reload connects the native app to the Next.js dev server via your local IP

## Building for Production

```bash
# Build the static export
pnpm build

# Sync with native projects
npx cap sync

# Open in Xcode / Android Studio
npx cap open ios
npx cap open android
```

## License

MIT
