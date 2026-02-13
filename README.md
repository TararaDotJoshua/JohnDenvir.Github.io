# John Denvir Portfolio

React + Vite portfolio website configured for automatic GitHub Pages deployment via GitHub Actions.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

This repo uses `.github/workflows/deploy-pages.yml`.

1. Push to `main`.
2. In GitHub: `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. The workflow builds `dist/` and deploys automatically.

## Base Path Handling

`vite.config.js` auto-detects base path from `GITHUB_REPOSITORY`:
- User/org site repo (`<name>.github.io`) -> `/`
- Project repo -> `/<repo-name>/`

No manual base path edits are required for Actions deploys.
