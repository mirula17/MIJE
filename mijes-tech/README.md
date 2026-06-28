# 🌸 Mijes Tech

> Your ultimate tech resource hub — AI Tools, ChatGPT Prompts, Coding Resources & more.

![Mijes Tech](https://img.shields.io/badge/Mijes%20Tech-Discover.%20Learn.%20Grow.-E8547A?style=for-the-badge)

---

## 🚀 Quick Start (Run Locally)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# → http://localhost:3000
# → Admin panel: http://localhost:3000/admin/login
```

---

## 🔐 Admin Panel

**URL:** `/admin/login`

Default credentials (change before deploying!):
- **Email:** `admin@mijestech.com`
- **Password:** `MijesTech@2024`

**To change credentials:** Edit `src/data/data.ts`:
```ts
export const ADMIN_EMAIL    = "your@email.com";
export const ADMIN_PASSWORD = "YourNewPassword";
```

### How to add a Google Doc resource:
1. Open your Google Doc
2. Click **Share** → **Anyone with the link** → set to **Viewer** (not Editor!)
3. Copy the link
4. Go to Admin Panel → Add New Resource → paste the URL
5. Users can view but **cannot edit** your document

---

## 📤 Deploy to Vercel (Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (follow prompts)
vercel

# Your site will be live at: https://mijes-tech.vercel.app
```

Or deploy via GitHub (recommended):
1. Push to GitHub (see below)
2. Go to https://vercel.com → New Project → Import from GitHub
3. Click Deploy — done!

---

## 📦 Push to GitHub

```bash
# Initialize git
git init
git add .
git commit -m "🌸 Initial Mijes Tech launch"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/mijes-tech.git
git branch -M main
git push -u origin main
```

---

## 📌 Add to Pinterest

Pinterest doesn't host websites directly — here's how to feature your site:

### Method 1: Pin your website pages
1. Go to https://pinterest.com → Create Pin
2. Enter your website URL (e.g. `https://mijes-tech.vercel.app`)
3. Pinterest will pull a preview image automatically
4. Add title: "Mijes Tech — Best AI Tools & Resources"
5. Add description: "Curated AI tools, ChatGPT prompts, free websites & coding resources. 100% free!"
6. Pin to your board

### Method 2: Add Pinterest "Save" button to your site
Add this to your `layout.tsx` head:
```html
<script async defer src="//assets.pinterest.com/js/pinit.js"></script>
```

### Method 3: Create a Pinterest board for each category
- Board 1: "AI Tools for Students" → link to /ai-tools
- Board 2: "ChatGPT Prompts" → link to /chatgpt-prompts
- Board 3: "Free Coding Websites" → link to /coding-resources
- Board 4: "Student Productivity" → link to /student-productivity

### Tips for Pinterest growth:
- Create a **vertical image** (1000×1500px) for each resource
- Use your pink brand colors (#E8547A)
- Pin 3-5 times per week
- Use keywords: "AI tools", "free resources", "student tips"

---

## 📁 Project Structure

```
mijes-tech/
├── src/
│   ├── app/
│   │   ├── page.tsx              ← Homepage
│   │   ├── layout.tsx            ← Root layout
│   │   ├── globals.css           ← Global styles
│   │   ├── admin/
│   │   │   ├── page.tsx          ← Admin dashboard
│   │   │   └── login/page.tsx    ← Admin login
│   │   ├── api/admin/            ← Admin APIs
│   │   ├── ai-tools/             ← Category pages
│   │   ├── resources/            ← All resources
│   │   ├── blog/                 ← Blog
│   │   ├── about/                ← About
│   │   └── subscribe/            ← Newsletter
│   ├── components/
│   │   ├── Navbar.tsx            ← Navigation
│   │   ├── footer.tsx            ← Footer
│   │   └── icons.tsx             ← All SVG icons + MJ Logo
│   └── data/
│       └── data.ts               ← All content (categories + resources)
├── tailwind.config.ts
└── package.json
```

---

## 🎨 Brand Colors

| Color | Hex |
|-------|-----|
| Pink Primary | `#E8547A` |
| Pink Dark | `#C9184A` |
| Pink Light | `#FFF0F4` |
| Rose Background | `#FFF5F7` |
| Dark Text | `#1A1A1A` |
| Muted Text | `#888888` |

---

## 📝 License

© 2024 Mijes Tech. All rights reserved.
