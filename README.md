# Get Weller Tech Solutions Portfolio

## Overview

This project is a modern portfolio website featuring dynamic 3D animations, floating navigation, and various interactive UI components. The project utilizes Next.js, Tailwind CSS, and other React libraries to create a visually engaging and performant experience. It includes server-side rendering (SSR) support and has been deployed on Vercel.

## Technologies Used
- Next.js: Server-side rendering and dynamic routing.
- React Three Fiber & Three.js: For 3D animations.
- Tailwind CSS: Responsive, utility-first styling.
- Framer Motion: For animations and transitions.
- Vercel: Hosting and deployment.

## Setup Instructions
### 1. **Install Dependencies**
  
  First, make sure you have Node.js installed. Then, in the project’s root directory, run the following command to install all required dependencies:  
  ```bash
  npm install
  ```
### 2. Run the Development Server

  To start the development server, use this command:
  ```bash
  npm run dev
  ```
  This will launch the application locally. You can view it in your browser at `http://localhost:3000`.

### 3.Build for Production
To create an optimized build for production, run the following command:
```bash
npm run build
```
This will generate the optimized static assets in the `.next` folder.

### 4. Serve the Production Build Locally
To test the production build on your local machine, se the command:
```bash
npm start
```
This will serve the optimized build, allowing you to verify how it performs in a production-like environment.

## Folder Structure

```plaintext
. 
├── app
│   ├── api                 # API routes for server-side operations.
│   ├── fonts               # Custom fonts for consistent styling.
│   ├── globals.css         # Global CSS styles.
│   ├── layout.tsx          # Global layout structure.
│   ├── page.tsx            # Main entry point for the home page.
│   └── provider.tsx        # Context providers for global state management.
│
├── components
│   ├── ui                  # Reusable UI components (e.g., 3D animations, grids, buttons).
│   ├── Footer.tsx          # Footer component for page layout.
│   ├── Hero.tsx            # Hero component for the landing page.
│   └── Other components... # Additional main page components (Clients, Projects, etc.).
│
├── data
│   ├── confetti.json       # Animation configuration data.
│   ├── globe.json          # Data for the 3D globe visualization.
│   └── index.ts            # Exports for shared data imports.
│
├── lib
│   └── utils.tsx           # Helper functions and utilities for reusability.
│
├── public                  # Static assets for icons, images, and SVGs.
│
├── .env.local              # Environment variables.
├── .eslintrc.json          # ESLint configuration for code linting.
├── next.config.mjs         # Next.js configuration settings.
├── tailwind.config.ts      # Tailwind CSS configuration for theming and customization.
├── tsconfig.json           # TypeScript configuration.
└── README.md               # Project documentation.
```

## Deployment
This project is deployed on Vercel, which fully supports SSR and optimized production hosting. Vercel provides a streamlined deployment process with automatic optimizations for performance and avaiability. 