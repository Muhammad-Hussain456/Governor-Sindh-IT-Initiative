https://nextjs.org/learn/dashboard-app
https://nextjs.org/learn/dashboard-app/getting-started

### Learn Next.js

##  Next.js App Router course

### Course Objectives
In this Next.js App Router course, you will:

1. **Build a Full-Stack Web Application of a financial dashboard :**
   - **Public Home Page:** Create a landing page that anyone can view.
   - **Login Page:** Implement a login page for user authentication.
   - **Protected Dashboard Pages:** Set up dashboard pages that require user authentication to access.
   - **Invoice Management:** Allow users to add, edit, and delete invoices.

2. **Database Integration:**
   - Set up and connect to a database hosted on Vercel.

3. **Learn Key Features of Next.js:**
   - **Styling:** Explore various methods to style your application.
   - **Optimizations:** Optimize images, links, and fonts for better performance.
   - **Routing:** Implement nested layouts and pages using file-system routing.
   - **Data Fetching:** Learn best practices for fetching and streaming data.
   - **Search and Pagination:** Add search functionality and pagination using URL Search Params.
   - **Mutating Data:** Use React Server Actions for data mutation and cache revalidation.
   - **Error Handling:** Handle general and 404 errors gracefully.
   - **Form Validation and Accessibility:** Implement server-side form validation and enhance accessibility.
   - **Authentication:** Add authentication using NextAuth.js and Middleware.
   - **Metadata:** Add metadata to enhance social sharing and SEO.

### System Requirements

Before starting the course, ensure that your system meets the following requirements:

1. **Node.js Version:**
   - **Node.js 18.17.0 or later** installed.

2. **Operating System:**
   - **macOS**, **Windows** (including Windows Subsystem for Linux - WSL), or **Linux**.

3. **Accounts:**
   - **GitHub Account:** Required for version control and collaboration.
   - **Vercel Account:** Needed for deploying your Next.js applications and setting up a database.

### 1.Getting Started:

### 1. **Package Manager Recommendation**
   - **pnpm** is recommended over npm or yarn for its speed and efficiency.
   - To install pnpm globally, use: `npm install -g pnpm`.

### 2. **Creating a Next.js Application**
   - Use `npx create-next-app` to set up a new Next.js app.
   - The command `npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm` creates a new Next.js project named `nextjs-dashboard` using a specified starter example and `pnpm` as the package manager.

### 3. **Exploring the Project Structure**
   - **Folder Structure:**
     - **`/app`**: Contains routes, components, and application logic.
     - **`/app/lib`**: Contains reusable functions and data fetching logic.
     - **`/app/ui`**: Contains pre-styled UI components.
     - **`/public`**: Contains static assets like images.
   - **Config Files**: Pre-configured files such as `next.config.js` that usually do not need modification.

### 4. **Using Placeholder Data**
   - Placeholder data is provided in `/app/lib/placeholder-data.ts` to simulate a database or API during development.
   - Example: An `invoices` array with mock data for invoices.

### 5. **TypeScript Integration**
   - The project uses TypeScript (`.ts` and `.tsx` files) for type safety.
   - **TypeScript Files:**
     - **`/app/lib/definitions.ts`**: Contains type definitions for data structures like `Invoice`.
   - TypeScript helps prevent incorrect data formats and integrates with Next.js for automatic configuration and type safety.

### 6. **Running the Development Server**
   - Install project dependencies with `pnpm i`.
   - Start the development server with `pnpm dev`.
   - The server runs on port 3000, accessible via `http://localhost:3000`.
