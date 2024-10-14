https://nextjs.org/learn/dashboard-app/partial-prerendering

# Partial Prerendering

## What is Partial Prerendering?

PPR combines the advantages of static and dynamic rendering. It enables developers to statically render parts of a page (like navigation menus or product details) while asynchronously loading other sections (such as user-specific data or recommendations) when the user accesses the route.

### How It Works

When a user visits a route, the application serves a static shell, containing the static components. Meanwhile, designated “holes” are created in this shell for the dynamic content, which loads asynchronously. This process leverages streaming to enhance the user experience by reducing the perceived load time.

## Static vs. Dynamic Routes

Typically, web applications are either entirely static or dynamic. Next.js allows developers to make granular decisions about rendering based on route requirements.

### Example: E-commerce Site

For an e-commerce platform:
- **Static Content**: Navigation bar, product information.
- **Dynamic Content**: User cart and recommended products.

This division enhances performance by only loading dynamic content as needed, while the static parts are delivered quickly.

## Implementing Partial Prerendering

To enable PPR in your Next.js application:

1. **Configure Next.js**: Add the PPR option in the `next.config.mjs` file.
   ```javascript
   const nextConfig = {
     experimental: {
       ppr: 'incremental',
     },
   };
   export default nextConfig;
   ```

2. **Set Up the Dashboard Layout**: Indicate that the layout supports PPR.
   ```javascript
   export const experimental_ppr = true;
   ```

In production, you will notice performance improvements as Next.js pre-renders static components and defers the dynamic ones.

### The Role of Suspense

**React's Suspense** plays a crucial role in PPR by defining boundaries between static and dynamic code. By wrapping components that rely on dynamic data in Suspense, Next.js can effectively manage which parts of the application need to wait for data before rendering.

