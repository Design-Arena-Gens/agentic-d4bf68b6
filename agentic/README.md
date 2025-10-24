## Hinglish Hook Agent

Interactive scripting co-pilot that helps you craft a Hinglish hook for a YouTube video covering underrated AI tools: Lover Art, Base 44, Bhendi AI, LightPDF, Vercept, and Prommpt AI.

### Features

- Conversational agent that responds in Hinglish and adapts hook style, pace, energy, and CTA.
- Script configurator to tweak persona, vibe, Hindi/English mix, and overall tone.
- Auto-generated hook options and segment-by-segment outline aligned with the tool stack.
- Tailwind-powered cinematic UI ready to deploy on Vercel.

### Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to use the agent. Adjust the controls on the left or chat with the agent to regenerate the intro script instantly.

### Available Commands

- `npm run dev` – local development server with hot reload.
- `npm run lint` – ESLint checks.
- `npm run build` – create production build.
- `npm start` – run compiled production build.

### Deployment

The project is optimized for Vercel. After building and testing locally, deploy with:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-d4bf68b6
```

### Folder Highlights

- `src/app/page.tsx` – main experience composed of the script configurator, preview, and chat agent.
- `src/lib/scriptEngine.ts` – deterministic generator for hooks, segments, and chat replies.
- `src/components/*` – UI components for chat, configuration, and preview.
