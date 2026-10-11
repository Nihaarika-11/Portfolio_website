# NIHAARIKA R.D. — Personal Portfolio Website
### *“Neural Industry — Intelligence Meets Automation”*

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF.svg)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8.svg)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-success.svg)](https://pages.github.com/)

A modern, responsive, futuristic personal portfolio website for **NIHAARIKA R.D.**, a third-year B.E. Electrical Instrumentation and Control Engineering student at **Sri Sairam Engineering College, Chennai** (Class of 2028).

The website synthesizes an AI research laboratory with an intelligent industrial control room, emphasizing artificial intelligence and machine learning while highlighting hands-on instrumentation, embedded systems, IoT, and industrial automation.

---

## 🌟 Visual Theme & Design Language

- **Theme Identity:** *Neural Industry — Intelligence Meets Automation*
- **Color Palette:**
  - Background: Deep midnight navy & near-black blue (`#040711`, `#070C1A`, `#0B132B`)
  - Primary Accent: Electric Blue (`#2563EB`, `#3B82F6`)
  - Secondary Accent: High-Tech Cyan (`#00F0FF`, `#22D3EE`)
  - Supporting Accent: Restrained Violet (`#8B5CF6`)
  - Typography: Space Grotesk for headings, Inter for body text, and native Indic fonts for Kannada, Hindi, and Tamil.
- **Visual Style:** Translucent dark glassmorphism surfaces (`glass-panel`), glowing terminal status bars, circuit trace grids, interactive HTML5 Canvas neural network, and responsive telemetry controls.

---

## 🚀 Key Sections & Architecture

1. **Hero Section:**
   - Prominent Name: `NIHAARIKA R.D.`
   - Main Headline: *“Building Intelligence. Connecting It to the Real World.”*
   - Supporting Headline: `AI & Machine Learning | Embedded Systems & Industrial Automation` *(strictly without generic software engineering claims)*
   - Status Badge: `Exploring AI • ML • Intelligent Systems`
   - Two Main Buttons: `Explore My Work` (scrolls to projects) & `Connect With Me` (scrolls to contact).
   - Interactive 3D Canvas Animation: Rotating neural network, synaptic weight pulses, traveling data particles, computer vision bounding box detection frame, and sensor-to-decision pipeline.
2. **About Me (“Beyond Software. Into Intelligent Systems”):**
   - Interdisciplinary exploration across AI/ML, embedded hardware, and industrial automation.
   - Three animated focus cards: `AI Explorer`, `Connected Systems Enthusiast`, and `Industrial Intelligence` (presented honestly as active learning pursuits).
3. **My Technical Toolkit:**
   - 4 confirmed categories: AI & ML (clearly marked as learning/developing), Programming & Software (Python, Java, Git & GitHub, Excel), Embedded Systems & IoT (ESP32, Arduino, Sensors, GPS/GSM, IoT), and Electronics & Engineering (EasyEDA, Tinkercad, Electronics, Instrumentation, Control Systems, Automation).
   - Each skill features an authentic SVG technology logo or custom illustration, hover illumination, and practical usage description. No arbitrary percentage bars.
4. **Flagship Featured Project — I-GAARD:**
   - *Intelligent AI-Driven Geofence Animal Detection and Real-Time Alert System*
   - Prominent flagship project card with problem statement, proposed solution, and complete hardware breakdown (ESP32, NEO-6M GPS, SIM800L GSM, acoustic deterrent).
   - Interactive 5-step animated architecture diagram (`Camera / Image Input → Animal Detection → Boundary Check → Alert Decision → GSM Notification`).
   - Detailed modal with full technical specification and transparent prototype milestone tracking.
5. **Second Project — Hospital Management Software:**
   - Academic Python software project applying programming concepts to healthcare workflow management.
   - Clinical terminal and data management illustration.
6. **Industrial Internships (“Learning From Industry”):**
   - **Fuji Electric** — Prominently displayed **15-Day Internship** (Industrial automation, electrical systems, control panels, safety protocols).
   - **Syrma SGS Technology Limited** — Prominently displayed **15-Day Internship** (Electronics manufacturing, PCB assembly, testing procedures, quality control).
7. **Education:**
   - Sri Sairam Engineering College, Chennai (B.E. Electrical Instrumentation & Control Engineering, Expected 2028, Current CGPA: **8.54 / 10**).
   - Higher Secondary (Class XII) — **89%**.
   - Secondary (Class X) — **94.6%**.
8. **Certifications and Learning (“Learning in Progress”):**
   - Completed: NPTEL The Joy of Computing Using Python, Data Analytics with Python, UN Sustainable Development Goals.
   - Ongoing: AI, Machine Learning, Computer Vision & Object Detection.
9. **Languages That Connect Me to the World:**
   - High-fidelity native scripts: **English — English**, **ಕನ್ನಡ — Kannada**, **हिन्दी — Hindi**, and **தமிழ் — Tamil** with appropriate multilingual typography.
10. **Achievements & Soft Skills:**
    - Speech Champion (“Play with Words”), sports prizes, and core interpersonal strengths.
11. **Personal Interests:**
    - Compact section exploring cultures, historical civilizations, and language scripts.
12. **Contact Section (“Let’s Build Something Intelligent”):**
    - Email: `nihaarika1106@gmail.com` (with one-click mailto and copy-to-clipboard button)
    - LinkedIn: `https://linkedin.com/in/nihaarika-rd`
    - GitHub: `https://github.com/Nihaarika-11`

---

## 🛠️ Project Structure

```text
nihaarika-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg             # Futuristic AI neural-circuit SVG favicon
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── About.tsx           # About Me section with 3 learning cards
│   │   ├── Achievements.tsx    # Awards & soft skills
│   │   ├── Certifications.tsx  # Completed vs ongoing learning
│   │   ├── Contact.tsx         # Contact channels & action buttons
│   │   ├── Education.tsx       # Timeline for college and schools
│   │   ├── Footer.tsx          # System telemetry & back-to-top button
│   │   ├── Hero.tsx            # Main hero screen with exact headlines
│   │   ├── HeroAnimation.tsx   # Interactive HTML5 Canvas AI/sensor visual
│   │   ├── Interests.tsx       # Personal interests (travel, history, scripts)
│   │   ├── Internships.tsx     # Fuji Electric & Syrma SGS (15-day badges)
│   │   ├── Languages.tsx       # Native scripts (Kannada, Hindi, Tamil, English)
│   │   ├── Navbar.tsx          # Sticky glassmorphic navbar with telemetry pill
│   │   ├── ProjectModal.tsx    # Technical deep-dive & GitHub modal
│   │   ├── Projects.tsx        # I-GAARD pipeline & Hospital Management
│   │   ├── SkillIcons.tsx      # SVG technology logos (Python, Java, ESP32, etc.)
│   │   └── Skills.tsx          # Technical toolkit cards
│   ├── data/
│   │   └── portfolioData.ts    # Centralized portfolio data file (easily editable)
│   ├── App.tsx                 # Main application component
│   ├── index.css               # Tailwind directives, control panels, glow styles
│   └── main.tsx                # React DOM entrypoint
├── index.html                  # HTML entry with SEO, social cards & Indic fonts
├── package.json                # Dependencies and deployment scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS theme configuration
├── tsconfig.json               # TypeScript strict configuration
├── vite.config.ts              # Vite configuration (relative base for Pages)
└── README.md                   # Full documentation
```

---

## 💻 Local Setup & Development

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **Git**

### 2. Install Dependencies
Open a terminal in the project directory:
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
Generates an optimized static production build in the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## ✏️ How to Update Content & Customize

All data is organized cleanly inside `src/data/portfolioData.ts`:

- **Update Bio / Headings / Contact:**
  Open `src/data/portfolioData.ts` and modify `PORTFOLIO_DATA.personal`.
- **Add / Edit Skills:**
  Update the `skillCategoriesData` array. Set `status: "Learning"` or add descriptions.
- **Update Project Details (I-GAARD / Hospital Management):**
  Edit `PORTFOLIO_DATA.projects.igaard` or `PORTFOLIO_DATA.projects.hospital`.
- **Add Future Certifications:**
  Add new items to `PORTFOLIO_DATA.certifications`.
- **Update Internships or Education:**
  Modify the `internships` or `education` arrays.

---

## 🌐 Connecting to GitHub & Deploying

### Step 1: Initialize Git and Commit
```bash
git init
git add .
git commit -m "Initial commit: Nihaarika R.D. Neural Industry Portfolio"
```

### Step 2: Link to Your GitHub Repository
Create a new public repository named `portfolio` (or your preferred name) on your GitHub account ([https://github.com/Nihaarika-11](https://github.com/Nihaarika-11)).
Then run:
```bash
git branch -M main
git remote add origin https://github.com/Nihaarika-11/<your-repo-name>.git
git push -u origin main
```

---

## 🚀 Two Options for Deploying to GitHub Pages

### Option A: Automatic Deployment via GitHub Actions (Recommended)
This repository already includes `.github/workflows/deploy.yml`.
1. Go to your repository on GitHub.
2. Click **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. That's it! Every time you push a commit to the `main` branch, GitHub Actions will automatically build and publish your website.

### Option B: One-Command CLI Deployment
If you prefer deploying directly from your terminal:
1. Run:
   ```bash
   npm run deploy
   ```
2. In your GitHub repository settings under **Pages**, ensure the branch is set to `gh-pages` / `/root`.
3. Your live portfolio will be available at:
   `https://Nihaarika-11.github.io/<your-repo-name>/`

---

## 🔄 Updating the Live Website in the Future

Whenever you want to add new skills, projects, or achievements:
1. Edit the files in `src/` (or `src/data/portfolioData.ts`).
2. Test locally: `npm run dev`.
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio projects and skills"
   git push origin main
   ```
4. If using GitHub Actions, your live site will update automatically in ~60 seconds!

---

## 📋 Quality & Compliance Verification

- [x] **Theme Consistency:** Midnight navy (`#040711`), Electric Blue, High-Tech Cyan, Restrained Violet.
- [x] **Exact Supporting Headline:** `“AI & Machine Learning | Embedded Systems & Industrial Automation”` (zero mention of Software Development).
- [x] **No Resume Download Buttons:** Strictly excluded per specifications.
- [x] **15-Day Internships:** Fuji Electric and Syrma SGS prominently show `15-DAY INTERNSHIP`.
- [x] **Academic Metrics:** Sri Sairam Engineering College (2028, CGPA 8.54/10), Class XII (89%), Class X (94.6%).
- [x] **Multilingual Typography:** Authentic native scripts rendered for ಕನ್ನಡ (Kannada), हिन्दी (Hindi), தமிழ் (Tamil), and English.
- [x] **I-GAARD System Flow:** Complete interactive 5-stage pipeline (`Camera → Detection → Boundary Check → Alert Decision → GSM`) with transparent prototype status.
- [x] **Static Hosting:** Vite configured with relative paths (`./`) and tested with `dist` production build.
