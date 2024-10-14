https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages
https://nextjs.org/learn/dashboard-app/navigating-between-pages

## 1. **Creating Layouts and Pages**

- **File-System Routing**: In Next.js, the structure of folders and files determines the routes (URLs) of app.
  - **Folders**: Each folder in the `/app` directory represents a new segment of the URL.
  - **Files**: The `page.tsx` file inside a folder defines what content will be displayed for that route.

- **Example**: If we create a folder `/app/dashboard` with a `page.tsx` file inside it:
  - URL: `http://localhost:3000/dashboard`
  - Content: The `page.tsx` file will show the content we define, such as `<p>Dashboard Page</p>`.


### **Creating a Layout**

- **Layout Files**: Use `layout.tsx` files to define shared UI elements that should appear on multiple pages.
  - **Purpose**: This is useful for elements like navigation bars that we want on every page of a certain section (e.g., the dashboard).
  
- **Example**: In the `/dashboard` folder, we create a `layout.tsx` file:
  - **Code**: The layout file includes a side navigation component (`<SideNav />`) and a content area where the page content will be displayed.
  - **Effect**: This layout will wrap around all pages in the `/dashboard` folder, so every dashboard page will show the side navigation and content area.

### **Partial Rendering**

- **What It Is**: When navigating between pages, only the parts of the page that need updating will change.
  - **Benefit**: This means the layout (e.g., the side navigation) doesn't need to re-render, which can make the app feel faster and more responsive.

### **Root Layout**

- **Root Layout (`/app/layout.tsx`)**: This file sets up a common layout for entire application.
  - **Code**: We can modify global elements like `<html>` and `<body>`, and include global styles and fonts.
  - **Purpose**: This layout is shared across all pages in the app, making it the base layout that affects every page.

### Summary

- **File-System Routing**: Folders and files create routes.
- **Layouts**: Define shared UI for groups of pages.
- **Partial Rendering**: Only updates page content, not the entire layout.
- **Root Layout**: Base layout for the whole app.

## 2. **Navigating Between Pages**

###  **Using the `<Link>` Component**

- **What It Is**: `<Link>` is a special component provided by Next.js to link between pages in the app.
- **Why Use It**: Unlike regular `<a>` tags, `<Link>` allows for faster navigation without reloading the entire page.
- **Example**:
  ```tsx
  import Link from 'next/link';

  function Nav() {
    return (
      <Link href="/dashboard">
        Dashboard
      </Link>
    );
  }
  ```

### **Automatic Code-Splitting and Prefetching**

- **Code-Splitting**: Next.js loads only the code needed for the current page, not the whole app at once. This makes the app faster.
- **Prefetching**: When a link is in view, Next.js preloads the page’s code in the background. This means when we click the link, the page loads almost instantly.
- **Benefit**: Reduces wait times and makes the app feel more responsive.

### **Showing Active Links**

- **What It Is**: Highlight the link of the page users are currently on, so users know where they are.
- **How to Do It**:
  - **Get Current Path**: Use `usePathname()` to find out the current URL.
  - **Highlight Active Link**: Compare the current URL to each link’s URL and add special styles to the active link.
- **Example**:
  ```tsx
  'use client';

  import { usePathname } from 'next/navigation';
  import Link from 'next/link';
  import clsx from 'clsx';

  function Nav() {
    const pathname = usePathname();

    return (
      <Link
        href="/dashboard"
        className={clsx(
          'nav-link',
          { 'active': pathname === '/dashboard' }
        )}
      >
        Dashboard
      </Link>
    );
  }
  ```


### Summary

- **`<Link>` Component**: Use this to navigate between pages without reloading the whole page.
- **Code-Splitting and Prefetching**: Makes page transitions faster and smoother by loading only what’s needed.
- **Active Links**: Highlight the link for the current page so users can easily see where they are in the app.