Learn Nextjs:
https://nextjs.org/learn/react-foundations/installation

## Installing Next.js

### **Manual Installation**

**Concepts Covered:**

1. **Project Setup**: Learn how to manually configure a Next.js project without relying on automated tools.
2. **Package Management**: Understand how to install and manage dependencies with npm.
3. **File and Configuration Management**: Gain insights into setting up essential files and configurations manually.

**Steps:**

1. **Prerequisites**:

   - Ensure you have Node.js version 18.17.0 or above installed.

2. **Project Setup**:

   - Create a `package.json` file in your project directory with an empty object:
     ```json
     {}
     ```

3. **Manage Packages:**:

   - Run the following command to install `react`, `react-dom`, and `next`:
     ```bash
     npm install react@latest react-dom@latest next@latest
     ```
   - This will also create a `package-lock.json` file with detailed version information.

4. **Update HTML to JSX:**:

   - Remove old HTML and script tags related to `react` and `Babel`.
   - Replace it with JSX by renaming `index.html` to `index.js` or `index.jsx`.

5. **Create and Configure Page Component**:

   - Set up a basic React component and export it as the default export:

     ```jsx
     import { useState } from "react";

     function Header({ title }) {
       return <h1>{title ? title : "Default title"}</h1>;
     }

     export default function HomePage() {
       const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
       const [likes, setLikes] = useState(0);

       function handleClick() {
         setLikes(likes + 1);
       }

       return (
         <div>
           <Header title="Develop. Preview. Ship." />
           <ul>
             {names.map((name) => (
               <li key={name}>{name}</li>
             ))}
           </ul>

           <button onClick={handleClick}>Like ({likes})</button>
         </div>
       );
     }
     ```

6. **Create Directory Structure**:

   - Create an `app` folder and move `page.js` inside it. Rename `index.js` to `page.js` if not already done.

7. **Add Development Script**:

   - Add a script to `package.json` to run the Next.js development server:
     ```json
     {
       "scripts": {
         "dev": "next dev"
       },
       "dependencies": {
         "next": "^14.0.3",
         "react": "^18.3.1",
         "react-dom": "^18.3.1"
       }
     }
     ```

8. **Run Development Server**:

   - Start the development server:
     
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
   - Note any errors related to React Server Components and `useState`. You’ll need to fix these in the next steps.

9. **Automatic Layout Creation**:
   - Next.js will create a `layout.js` file in the `app` folder for shared UI elements.

### **Using `create-next-app`**
 A Command Line Interface (CLI) tool that sets up a Next.js application for you.
 Most of these files are created and pre-configured when you start a new project using create-next-app.

**Concepts Covered:**

1. **Automated Setup**: Quickly initializes a new Next.js project with default configurations.
2. **Default Configuration**: Sets up a working project structure with minimal manual setup.

**Steps:**

1. **Run `create-next-app` Command**:

   - Use `npx` to create a new Next.js project in the current directory:
     ```bash
     npx create-next-app@latest ./
     ```
   - Alternatively, specify a new directory:
     ```bash
     npx create-next-app@latest my-next-app
     ```

2. **Navigate to Project Directory**:

   - If you specified a new directory, navigate into it:
     ```bash
     cd my-next-app
     ```

3. **Start Development Server**:
   - Run the development server with:
     ```bash
     npm run dev
     ```

### Additional libraries, UI components, and tools.

You can easily enhance your Next.js application by incorporating a range of additional libraries, UI components, and tools. For styling, you can integrate utility-first frameworks like Tailwind CSS or UI libraries such as Shadcn UI, Chakra UI, MUI, or Ant Design, which offers beautifully designed Tailwind CSS components. For state management, consider adding Redux, Recoil, or MobX. Streamline data fetching with Axios or Apollo Client, and improve form handling using Formik or React Hook Form. Additionally, incorporate testing tools like Jest and Cypress, and utilize deployment solutions such as Vercel CLI. Each of these can be installed and configured manually to customize your application to meet your specific needs.
