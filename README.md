# DECStudio — Modern Developer Portfolio

Official portfolio website for **DECStudio** — Multi-disciplinary technology professional specializing in Web Development, Android Development, Software Engineering, IT Technical Support, Systems & Automation, and Digital Content Creation.

---

## 🎨 Visual Identity & Architecture

- **Palette**: Signature DECStudio Dark Palette (`#000000` Black, `#1F150C` Dark Brown, `#412D15` Brown, `#E1DCC9` Warm Cream)
- **Profile Photo**: `public/PP.jpg` (Fixed executive portrait with technical rotating ring)
- **Studio Backdrop**: `public/dec.jpg` (Creator studio background adapted with 65% opacity and dark multiply scrim)
- **Tech Stack**: React 19, TypeScript, Tailwind CSS v4, Motion, Vite

---

## 🚀 How to Deploy to GitHub Pages (Automatic with GitHub Actions)

This repository includes a pre-configured GitHub Actions workflow in `.github/workflows/deploy.yml` that automatically builds and publishes the website whenever you push to `main`.

### Step 1: Create a New GitHub Repository
1. Go to [GitHub New Repository](https://github.com/new).
2. Name the repository (for example: `portfolio` or `decstudio`).
3. Set visibility to **Public** (recommended for free GitHub Pages).

### Step 2: Push This Code to Your GitHub Repository
Run these commands in your project root terminal:

```bash
# Initialize git if not already initialized
git init

# Add all files
git add .

# Commit changes
git commit -m "feat: DECStudio modern developer portfolio"

# Set branch to main
git branch -M main

# Link to your remote GitHub repository
# (Replace with your actual GitHub repository URL)
git remote add origin https://github.com/DECStudioHub/YOUR-REPO-NAME.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages in Repository Settings
1. On GitHub, go to your repository: `https://github.com/DECStudioHub/YOUR-REPO-NAME`.
2. Click **Settings** (tab at the top).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment** > **Source**, select:
   👉 **GitHub Actions**
5. That's it! GitHub Actions will run automatically and your live site URL will be displayed (typically `https://decstudiohub.github.io/YOUR-REPO-NAME/`).

---

## 🖼️ Updating Your Photos

Your photos are located in the `public/` directory:
- `public/PP.jpg` — Profile portrait headshot
- `public/dec.jpg` — Background creator studio photo

Whenever you want to update your photos, simply replace `public/PP.jpg` or `public/dec.jpg` with your files (keep the same filenames), then commit and push:

```bash
git add public/PP.jpg public/dec.jpg
git commit -m "chore: update portfolio photos"
git push
```

The GitHub Actions workflow will automatically rebuild and deploy your updated images in under a minute!

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📄 License
© 2026 DECStudio. All Rights Reserved.
