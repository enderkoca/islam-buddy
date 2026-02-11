# 🚀 Deployment Guide

## Current Setup

- **GitHub Repository:** https://github.com/enderkoca/islam-buddy
- **Vercel Project:** https://vercel.com/oye-techs-projects/islam-buddy
- **Production URL:** https://islam-buddy.vercel.app
- **Deployment Method:** Manual (CLI)

## 📝 How to Deploy

### Option 1: Quick Deploy (Recommended)
```bash
deploy-islam
```
This will:
1. Push to GitHub
2. Deploy to Vercel production

### Option 2: Step by Step
```bash
# 1. Commit your changes
git add .
git commit -m "your commit message"

# 2. Push to GitHub
git push origin main

# 3. Deploy to Vercel
vercel --prod
```

### Option 3: Deploy Only (without GitHub push)
```bash
vercel --prod
```

## 🔧 Useful Commands

```bash
# Check deployment logs
vercel logs

# List all deployments
vercel ls

# Open project in Vercel dashboard
vercel inspect

# Deploy to preview (not production)
vercel
```

## 🌍 Supported Languages

- 🇬🇧 English (default)
- 🇹🇷 Turkish - `/tr`
- 🇸🇦 Arabic - `/ar`
- 🇫🇷 French - `/fr`
- 🇪🇸 Spanish - `/es`
- 🇩🇪 German - `/de`
- 🇳🇱 Dutch - `/nl`

## 📌 Notes

- Main branch: `main`
- Node version: Latest
- Framework: Next.js 14.2.35
- Package manager: npm

## 🔄 Switching to Auto-Deploy (Optional)

If you want automatic deployments on every push:
1. Go to https://vercel.com/new
2. Import from GitHub: `enderkoca/islam-buddy`
3. Follow the wizard
4. GitHub integration will be automatically configured
