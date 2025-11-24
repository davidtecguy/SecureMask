# Vercel Deployment Guide

## Vercel Configuration

When deploying to Vercel, use these settings:

### Project Settings:
- **Framework Preset**: `Vite` (NOT Create React App)
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` (automatically detected)
- **Output Directory**: `dist` (automatically detected)
- **Install Command**: `npm install` (automatically detected)

### Important Notes:

1. **Framework Detection**: Vercel should automatically detect Vite from the `vite.config.js` file. If it doesn't, manually select "Vite" from the framework dropdown.

2. **The `vercel.json` file** has been created to ensure proper configuration:
   - Output directory: `dist`
   - Build command: `npm run build`
   - SPA routing: All routes redirect to `index.html` for client-side routing

3. **Three.js Version**: Updated to `^0.159.0` to resolve peer dependency conflicts with `@react-three/drei`.

## Deployment Steps:

1. Push your code to GitHub (if not already done)
2. Go to Vercel Dashboard
3. Click "New Project"
4. Import your GitHub repository
5. **IMPORTANT**: Make sure the Framework Preset is set to **"Vite"** (not Create React App)
6. Verify the settings match above
7. Click "Deploy"

## Troubleshooting:

If you still see errors:

1. **Clear Vercel cache**: In project settings, go to "Settings" → "General" → "Clear Build Cache"
2. **Check Node.js version**: Vercel should use Node.js 18.x or higher (automatically detected)
3. **Verify build locally**: Run `npm run build` locally to ensure it works before deploying

## Environment Variables:

If you need to add environment variables:
- Go to Project Settings → Environment Variables
- Add any required variables
- Redeploy the project

