# Deploying to Vercel with your own domain

The site is fully static: `npm run build` outputs plain files to `dist/`. You don't need a server or a database.

## 1. Import the repo
1. Sign in at https://vercel.com with your GitHub account.
2. Click **Add New → Project** and import `hadygust/portfolio`.
3. Vercel detects Astro automatically and fills in these settings. Check them:
   - Build command: `npm run build`. This runs the type check, the build and the link check, so any broken link fails the deploy.
   - Output directory: `dist`
   - Install command: `npm install`
4. Under **Environment Variables**, add `SITE_URL` = `https://your-domain.com` with no trailing slash. It's used for canonical URLs, social previews, `robots.txt` and the sitemap.
5. Click **Deploy**.

## 2. Connect your domain
1. Go to **Project → Settings → Domains → Add** and enter your domain.
2. Vercel shows the DNS records to create. They are usually:
   - an `A` record for the apex domain, pointing at Vercel's IP;
   - a `CNAME` for `www`, pointing at `cname.vercel-dns.com`.
3. Add those records at your domain registrar. Vercel issues the HTTPS certificate automatically once DNS has propagated, which takes anywhere from minutes to a few hours.
4. Choose one form as the primary (apex or `www`). Vercel redirects the other form to it.
5. If you change the domain later, update `SITE_URL` and redeploy.

## 3. Publishing updates
- Push to `main` and Vercel builds and deploys to production automatically.
- Push to any other branch, or open a PR, and Vercel creates a **preview deployment** with its own URL. Use it to check changes before merging.
- If a build fails, Vercel emails you and the production site keeps serving the last good version. You can see the logs under **Deployments**.

## Checking a build locally first
```bash
npm install
npm run build     # type check + build + link check
npm run preview   # serves dist/ at http://localhost:4321
```

## Notes
- Nested routes such as `/projects/url-shortener` are real files, so they work with direct access and on refresh. No rewrites are needed.
- Unknown URLs serve the custom `404.html` automatically.
- The site doesn't use any secrets.
