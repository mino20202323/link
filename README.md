# LinkD

This repository contains a minimal LinkedIn-style demo built with [Expo](https://expo.dev), a small [Next.js](https://nextjs.org) backend and [Supabase](https://supabase.com) for authentication and data storage. The Expo app uses **React Native Paper** for a dark UI with purple accents and Supabase Auth for signing in and creating accounts, while the Next.js API exposes helper endpoints. UI screens now include themed backgrounds and card-based forms for a cleaner look.

## Features
- User authentication with Supabase
- Create posts and browse the feed
- Profile page with placeholder details
- New chat tab for future messaging
- Like and comment buttons on posts (placeholders)

## Running the app

1. Install dependencies

   ```bash
   npm install --prefix linkD
   ```

2. Start the development server

   ```bash
   npx expo start --working-directory linkD
   ```

Open the web preview from the Expo CLI to interact with the demo.

### Linting

Run the linter from the `linkD` directory after installing dependencies:

```bash
npm run lint --prefix linkD
```

### Backend

1. Copy `.env.local.example` to `.env.local` inside the `next` directory and fill in your Supabase credentials.
2. Install dependencies and start the dev server:

```bash
npm install --prefix next
npm run dev --prefix next
```
