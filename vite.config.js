import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function resolveBasePath() {
  const repo = process.env.GITHUB_REPOSITORY
  if (!repo) return '/'

  const [, repoName = ''] = repo.split('/')
  return repoName.toLowerCase().endsWith('.github.io') ? '/' : `/${repoName}/`
}

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  base: resolveBasePath(),
}))
