# 🌷 The Language of Flowers (Floriography)
-----
Live Demo: [Floriography](https://flower-card.netlify.app/)
## Getting Started

Follow these steps to set up and run the project locally.

### 1\. Prerequisites

Ensure you have Node.js (v18+) and npm/yarn/pnpm installed.

### 2\. Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/srpthemangoeater/flower-card flower-language-web
    cd flower-language-web
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### 3\. Running the Development Server

Start the project in development mode:

```bash
npm run dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to view the application.

-----

## 📝 To-Do List (Pending Enhancements)

This project is still under development. The following tasks are planned:

  * **Find and Add Flower Images:** Replace placeholder images with high-quality, actual pictures for all flowers in `public/images`.
  * **Expand Content:** Add richer content to the detail pages, such as:
      * Historical Context of the Meaning
      * Alternative Meanings (e.g., color variations)
      * Scientific Name (Botanical Name)
  * Implement Sorting/Filtering options (e.g., filter by A-Z).

-----

## 📁 Folder Structure

Here is the primary folder structure utilizing the Next.js App Router:

```
flower-language-web/
├── node_modules/
├── public/
│   ├── images/         (Hero image and actual flower images to be added)
│   └── ...
├── src/
│   ├── app/            (App Router)
│   │   ├── components/ (Reusable Components)
│   │   │   ├── Footer.tsx
│   │   │   └── PageTransition.tsx  (Framer Motion)
│   │   ├── flower/     (Dynamic Route)
│   │   │   └── [id]/   
│   │   │       └── page.tsx      (Flower Detail Page)
│   │   ├── globals.css 
│   │   └── layout.tsx  (Root Layout, Inter Font, Header/Hero)
│   │   └── page.tsx    (Home Page - Search and List)
│   ├── data/           (Core Data)
│   │   └── flowers.json  (Flower data and meanings)
│   └── types/          (TypeScript Definitions)
│       └── flower.ts   (Flower Interface)
├── next.config.js      (Image configuration)
├── package.json
└── tailwind.config.ts
```

-----

## About this Project

Developed by **srp.mango** as a **Next.js personal learning project**.