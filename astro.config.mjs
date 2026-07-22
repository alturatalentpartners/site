import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ---------------------------------------------------------------------------
// GitHub Pages configuration
//
// If you deploy to a PROJECT page (https://<username>.github.io/<repo>/),
// keep `site` and `base` below in sync with your actual GitHub username and
// repository name.
//
// If you deploy to a USER/ORG page (a repo literally named
// <username>.github.io) or you attach a custom domain, set `base` to '/'.
// ---------------------------------------------------------------------------
const GITHUB_USERNAME = 'your-github-username';
const REPO_NAME = 'altura-talent-partners';

export default defineConfig({
  site: `https://${GITHUB_USERNAME}.github.io/${REPO_NAME}/`,
  base: `/${REPO_NAME}`,
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
