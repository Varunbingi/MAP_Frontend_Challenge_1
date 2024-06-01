# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Setup instructions for tailwind
Tailwind official instruction doc

Install tailwindcss
 ```
    npm install -D tailwindcss postcss autoprefixer
 ```
Create tailwind config file
```
    npx tailwindcss init
```
Add file extensions to tailwind config file in the contents property
```
    "./src/**/*.{html,js,jsx,ts,tsx}", "./index.html",
```

Add the tailwind directives at the top of the index.css file
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
- [tailwindcss](https://tailwindcss.com/docs/installation/framework-guides)