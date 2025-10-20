# IEEE PES Student Branch Chapter Website

[![Firebase Hosting](https://img.shields.io/badge/Hosted%20on-Firebase-orange?logo=firebase)](https://firebase.google.com/)
[![Status](https://img.shields.io/badge/Status-Live-brightgreen)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

This is the official multi-page website of the **IEEE PES Student Branch Chapter**
It provides information about the chapter, upcoming events, registration forms (planned), and showcases the work of the PES Student Branch community.  
The site is designed with a modern glassmorphic UI, responsive design, and smooth navigation.

---

## Features Implemented

- **Home Page**

  - Overview of IEEE PES and the institution.

- **About Section**

  - Brief introduction of the PES SBC.
  - Professional fonts used: **Ubuntu**, **Poppins** for headings/body.
  - Mission, vision, and chapter background.

- **Events Section**

  - Displays ongoing and past events.

- **Team Page**

  - Interactive cards showing committee members and faculty advisor.

- **Contact Page**

  - Reach-out form and location map.

- **404 Page**

  - “Page Not Found” screen.

- **Responsive Design**
  - Works across all screen sizes (desktop, tablet, mobile).
  - Mobile-friendly layout with adaptive typography and elements.
  - Uses modern CSS for hover effects, animations, and background enhancements.

---

## Technologies & Tools Used (Tech Stack)

| Category                 | Tools / Libraries                                              |
| ------------------------ | -------------------------------------------------------------- |
| **Frontend**             | HTML5, CSS3, JavaScript                                        |
| **Framework**            | React - Vite                                                   |
| **Routing**              | React Router DOM (Multi-Page routing)                          |
| **Styling**              | CSS Modules, Fonts (Google Font - Ubuntu Sans-serif)           |
| **Hosting**              | Firebase Hosting (Free Hosting)                                |
| **Backend (Planned)**    | Firebase Authentication & Firestore                            |
| **Animations (Planned)** | `AOS.js` (scroll effects), `particles.js` (background glitter) |
| **Icons & Social links** | Font Awesome                                                   |
| **Version Control**      | Git + GitHub                                                   |

---

## UI Highlights

- Glassmorphic navbar with scroll shadow effect
- Dynamic team cards with fallback initials if photo missing
- Smooth hover animations
- Professional footer layout
- Consistent color palette & fonts
- Mobile-friendly hamburger navigation

---

## Folder Structure

```
src/
 ├── assets/
 │   ├── images/               --Logos or images used in the website
 |   ├── team/                 --Contains all team members images
 |   └── react.svg
 ├── components/
 │   ├── Navbar.jsx            --Common Navigation bar to all pages
 │   ├── Footer.jsx            --Common Footer bar to all pages
 |   ├── Layout.jsx
 │   └── ScrollToTop.js        --Resets scroll bar to top after routing to any pages
 ├── pages/                   --contains all source codes of each page
 │   ├── About.jsx             --About page source code
 │   ├── Contact.jsx           --Contact page source code
 │   ├── Events.jsx            --Events page source code
 │   ├── Home.jsx              --Home page source code
 │   ├── NotFound.jsx          --Error page source code
 │   └── Team.jsx              --Team page source code
 ├── styles/                  --contains all css stylings of each page
 │   ├── About.module.css
 │   ├── Contact.module.css
 │   ├── Events.module.css
 │   ├── Footer.module.css
 │   ├── global.css
 │   ├── Home.module.css
 │   ├── Navbar.module.css
 │   ├── NotFound.module.css
 │   └── Team.module.css
 ├── App.css
 ├── App.jsx
 ├── index.css
 ├── main.jsx
 └── data/                    --contains all the data files related to pes members
     ├── teamCard.jsx          --Each member card source code
     └── teamData.js           --Data fetcher for each member
```

```
public/
 ├── images/                  --contains directly accessed images
 │   ├── background.jpg
 |   └── ....
 ├── robots.txt               --required by search engine to walkthrough all the pages
 ├── sitemap.xml              --required by search engine to know the hierarchy of the website
 └── ....
```

> **Note:** Files in the `public` directory are served from the root.  
> Example: `/images/ieee-pes-logo.png` (not `/public/images/...`).

---

## Future Enhancements (Planned)

- Event registration forms integrated with **Firebase Firestore**
- Admin portal for managing event details and updates
- Dynamic event gallery (Firebase storage)
- Glitter/particle animated background

---

## Contribution Guidelines

1. Fork the repository
2. Create a new branch:  
   `git checkout -b feature-name`
3. Commit your changes:  
   `git commit -m "Added new feature"`
4. Push to the branch
   `git push origin feature-name`
5. Create a Pull Request (Pull request will be merged only after accepting by admin)

---

## Set-up the environment

1. Install the necessary libraries
   `npm install`
2. Install node.js and Git if not already
3. Initialize Firebase
   `firebase login`
   `firebase init`

---

## How to run Locally

1. Clone the repository
   `git clone https://github.com/sumadhwa3009/ieeepessb.git`
   `cd pes-website`
2. Make the changes you want
   Note: To Make changes or to add any feature use **src** folder ONLY
3. Save locally
   `Ctrl + S`
4. Run on local host
   `npm run dev`

---

## Deployment (How to Deploy the site globally)

### 1️⃣ **Build Project**

```bash
npm run build
```

It will create or modify the **dist** folder (Do not try to modify this)

### 2️⃣ **Deploy to Firebase**

```bash
firebase deploy
```

### 3️⃣ **Add to GitHub **

```bash
git checkout -b feature-name
git add .
git commit =m "Commit message"
git push
# push to branch then create pull request
```

---

## Deployment Options

## 1. SEO Optimization

To ensure the PES SBC Website ranks well in search engines and appears professional in social previews, several **SEO (Search Engine Optimization)** techniques were implemented.

### Key SEO Enhancements

- **Meta Tags:** Each page includes essential metadata such as title, description, and keywords.
- **React Helmet Integration:** Manages document head and meta information within React components, ensuring each page has its own title and description.
- **Favicon & Open Graph Tags:** Includes a favicon and OG meta tags for better social media link previews.
- **Sitemap Generation:** A custom script automatically creates a valid `sitemap.xml` file for all routes, helping search engines crawl the website efficiently.
  To regenerate sitemap: `npm run generate-sitemap`
- **robots.txt File:** Controls how search engines index different parts of the website.
- **Performance Optimization:** Lazy loading, optimized images, and clean URL paths improve user experience and page ranking.

These optimizations ensure the website is **search-friendly**, **shareable**, and **technically sound** for long-term visibility.

---

## 2. EmailJS Integration

**EmailJS** is used in the PES SBC Website to handle communication through the contact form — enabling users to send messages directly from the site without needing a backend.

### Why EmailJS?

- Eliminates the need for a server to send emails.
- Integrates directly with React using the EmailJS SDK.
- Sends messages securely using a service ID, template ID, and public key.
- Enables full customization of email templates via the EmailJS dashboard.

### How It Works

1. The contact form collects user details (name, email, message).
2. On form submission, EmailJS sends this data to its server.
3. EmailJS connects to your chosen email service (like Gmail/Outlook) and delivers the message to your configured recipient address.

### Files Involved

- `Contact.jsx` (contact form component)
- `.env` file for storing EmailJS keys securely

Together, **SEO optimization** and **EmailJS integration** improve both the **visibility** and **usability** of the PES SBC Website — ensuring it looks great, performs well, and allows visitors to connect effortlessly.

---

## License

Feel free to use and modify it for the student branch purposes only
Strictly prohibited for personal uses

---

## Contact

**IEEE PES Student Branch Chapter**  
Contact for technical issues, collaborations, suggestions and feedback
Email: [ieeepes.bmsit@gmail.com](mailto:ieeepes.bmsit@gmail.com)  
BMS Institute of Technology and Management, Bangalore

### Connect (Web Master IEEE PES SB BMSIT&M)

Email: [sumadhwarao2005@gmail.com](mailto:sumadhwarao2005@gmail.com)

---

[This README.md should be updated after every changes made to the website]

IEEE PES SBC — Empowering innovation through technology and teamwork

© 2025 IEEE PES SBC BMSIT&M— All rights reserved
