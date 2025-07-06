

## Music-Wave 



## Folder Structure

musicwave/
├── app/
│   ├── layout.tsx         # Root layout
│   ├── globals.css
│   └── page.tsx           # Home page
│
├── components/            # Reusable UI components
│   ├── ThemeToggle.tsx
│   ├── Sidebar.tsx
│   ├── MusicCard.tsx
│   ├── MusicGrid.tsx
│   ├── MusicPlayer.tsx
│   └── Topbar.tsx
│
├── context/               # Context API (Theme, Player, Auth etc.)
│   ├── ThemeContext.tsx
│   └── PlayerContext.tsx
│
├── hooks/                 # Custom hooks
│   └── useLocalStorage.ts
│
├── public/                # Static assets
│   └── logo.svg
│
├── styles/                # Extra SCSS or utilities (optional)
│
├── tailwind.config.js     # TailwindCSS config
├── postcss.config.js
├── tsconfig.json
├── next.config.js
├── package.json
└── README.md


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

