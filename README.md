# Flashcards App

A simple flashcard application built with React and Vite, optimized for Cloudflare Pages deployment.

## Features

- 📚 Interactive flashcard interface
- 🔄 Flip animations
- 📊 Progress tracking
- 📱 Responsive design
- ⚡ Fast and lightweight

## Local Development

```bash
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deploying to Cloudflare Pages

This project is configured to deploy automatically to Cloudflare Pages.

### Build Configuration

- **Framework preset**: None (or React)
- **Build command**: `npm ci && npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/`
- **Environment variables**: None required

### Node Version

The project uses Node.js 24.11.0 (defined in `.nvmrc`). Cloudflare Pages will automatically detect and use this version.

## Project Structure

```
flashcards/
├── dist/              # Build output (generated)
├── public/            # Static assets
│   ├── _redirects     # Cloudflare Pages SPA routing
│   └── flashcards.json # Flashcard data
├── src/               # Source code
│   ├── App.jsx        # Main App component
│   ├── App.css        # Styles
│   └── main.jsx       # Entry point
├── .nvmrc            # Node version specification
├── package.json       # Dependencies and scripts
└── vite.config.js     # Vite configuration
```

## Customizing Flashcards

Edit `public/flashcards.json` to add, modify, or remove flashcards:

```json
[
  {
    "front": "Question text here",
    "back": "Answer text here"
  }
]
```

## License

Private project
