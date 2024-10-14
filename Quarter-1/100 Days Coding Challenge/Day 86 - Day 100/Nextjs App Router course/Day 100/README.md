 https://nextjs.org/learn/dashboard-app/next-steps

## Comprehensive Overview of Next.js Topics Covered in the 100 Days Coding Challenge:

### 1. **Routing**
   - **File-based Routing**
     - Automatic route generation based on file structure.
   - **Dynamic Routing**
     - Creating dynamic routes using `[param].js`.
     - Accessing route parameters via the `useRouter` hook.
   - **Nested Routes**
     - Organizing routes in folders for nested structures.
   - **Catch-all Routes**
     - Using `[...slug].js` for multiple path segments.

### 2. **Data Fetching**
   - **Static Generation (SSG)**
     - `getStaticProps`: Fetching data at build time for static pages.
     - `getStaticPaths`: Generating paths for dynamic routes at build time.
   - **Server-side Rendering (SSR)**
     - `getServerSideProps`: Fetching data on each request for dynamic content.
   - **Client-side Fetching**
     - Using hooks like `useEffect` for client-side data fetching.
     - Libraries: SWR, React Query for data fetching and caching.

### 3. **API Routes**
   - **Creating API Endpoints**
     - Setting up endpoints in `pages/api`.
   - **Handling HTTP Methods**
     - Managing GET, POST, PUT, DELETE requests.
   - **Returning JSON Responses**
     - Sending back JSON data from API routes.

### 4. **Styling**
   - **CSS Modules**
     - Scoped styles using `.module.css`.
   - **Global Styles**
     - Applying global styles in `_app.js`.
   - **CSS-in-JS Libraries**
     - Styled-components and Emotion for dynamic styling.
   - **Tailwind CSS Integration**
     - Using utility-first CSS framework for styling.

### 5. **Image Optimization**
   - **Next.js Image Component**
     - Automatic image optimization and responsive loading.
   - **Image Formats and Sizes**
     - Specifying different formats (e.g., WebP) and sizes for responsive design.
   - **Lazy Loading**
     - Images loading only when they enter the viewport.

### 6. **Deployment**
   - **Deploying on Vercel**
     - Automatic deployments from GitHub, GitLab, or Bitbucket.
   - **Environment Variables**
     - Setting up and accessing environment variables securely.
   - **Static vs. Dynamic Hosting**
     - Understanding the hosting models for static and dynamic sites.

### 7. **Performance Optimization**
   - **Code Splitting**
     - Automatic splitting by page, minimizing the initial load.
   - **Prefetching**
     - Automatic prefetching of linked pages to improve navigation speed.
   - **Optimizing Assets**
     - Strategies for optimizing images, fonts, and other assets.

### 8. **Internationalization (i18n)**
   - **Setting Up i18n**
     - Configuring multiple languages in `next.config.js`.
   - **Translating Content**
     - Handling translations using libraries like i18next.
   - **Locale Detection**
     - Automatically detecting user language and serving appropriate content.

### 9. **Middleware**
   - **Creating Middleware**
     - Running code before requests are completed.
   - **Use Cases**
     - Authentication, logging, rewriting, or modifying requests.
   - **Edge Functions**
     - Running middleware at the edge for faster performance.

### 10. **Incremental Static Regeneration (ISR)**
   - **Updating Static Pages**
     - Using `revalidate` to define regeneration intervals.
   - **Balancing Static and Dynamic Content**
     - Combining benefits of static generation with the ability to update.

### 11. **Static Files and Assets**
   - **Serving Static Files**
     - Using the `public` directory for static assets.
   - **Custom Document and App**
     - Customizing `_document.js` for HTML structure.
     - Customizing `_app.js` for global state and layout.

### 12. **Typescript Support**
   - **Setting Up TypeScript**
     - Configuring TypeScript in a Next.js project.
   - **Type Safety**
     - Using TypeScript interfaces and types for components and props.

### 13. **React Features Integration**
   - **React Hooks**
     - Using built-in React hooks like `useState`, `useEffect`, and custom hooks.
   - **Context API**
     - Managing global state with React Context.

### 14. **Testing**
   - **Testing Frameworks**
     - Setting up Jest and React Testing Library for component testing.
   - **End-to-End Testing**
     - Using tools like Cypress for testing user interactions.

### 15. **SEO Optimization**
   - **Meta Tags**
     - Using `next/head` to manage SEO metadata.
   - **Sitemap and Robots.txt**
     - Generating sitemaps and robots.txt for better indexing.

## Next Steps:
https://nextjs.org/learn/dashboard-app/next-steps