# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

## Portfolio project structure

```text
app/
  components/
    layout/       # Shared page layout, header, and footer
    ui/           # Reusable interface components
  data/           # Portfolio content such as projects and skills
  hooks/          # Reusable React hooks
  lib/            # Shared utilities
  routes/         # Route modules (home.tsx is the home page)
  types/          # Shared TypeScript types
  root.tsx        # App shell
  app.css         # Global styles
public/
  documents/      # Resume and other downloadable files
  images/         # Profile and general portfolio images
  projects/       # Project-specific images and media
```

Keep route-specific pages in `app/routes`, reusable components in `app/components`, and static files in `public`.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
