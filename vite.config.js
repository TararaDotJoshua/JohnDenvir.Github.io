import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function resolveBasePath() {
  const repo = process.env.GITHUB_REPOSITORY
  if (!repo) return '/'

  const [owner = '', repoName = ''] = repo.split('/')
  const isUserOrOrgPagesRepo =
    repoName.toLowerCase() === `${owner.toLowerCase()}.github.io`

  return isUserOrOrgPagesRepo ? '/' : `/${repoName}/`
}

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  base: resolveBasePath(),
}))
