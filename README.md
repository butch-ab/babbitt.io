# Flashcards App

A simple React + Vite flashcards application with a static JSON database.

## Features

- Browse through flashcards with Next/Previous buttons
- Click to flip cards and reveal answers
- Simple, clean interface
- Static JSON database for easy customization

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown in the terminal (usually http://localhost:5173)

## Building for Production

```bash
npm run build
```

This will create a `dist` folder with the production-ready files.

## Deploying to Cloudflare Pages

### Option 1: Via Git Integration (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
3. Click "Create a project"
4. Connect your Git repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (or leave empty)
6. Click "Save and Deploy"

### Option 2: Direct Upload

1. Build the project:
```bash
npm run build
```

2. Install Wrangler CLI (if not already installed):
```bash
npm install -g wrangler
```

3. Login to Cloudflare:
```bash
wrangler login
```

4. Deploy to Pages:
```bash
wrangler pages deploy dist
```

## Customizing Flashcards

Edit the `src/data/flashcards.json` file to add, remove, or modify flashcards. Each flashcard should have:
- `id`: Unique identifier
- `question`: The question text
- `answer`: The answer text

Example:
```json
{
  "id": 9,
  "question": "Your question here?",
  "answer": "Your answer here"
}
```

## Project Structure

```
flashcards/
├── src/
│   ├── data/
│   │   └── flashcards.json    # Flashcard database
│   ├── App.jsx                # Main app component
│   ├── App.css                # App styles
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies
```

## License

MIT
