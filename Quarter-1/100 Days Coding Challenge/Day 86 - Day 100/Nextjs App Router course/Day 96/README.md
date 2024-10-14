https://nextjs.org/learn/dashboard-app/error-handling

# Handling Errors:

### 1. **Using try/catch for Server Actions**

When working with server-side code (like Server Actions), we want to catch any errors that might happen. This is where `try/catch` comes in handy:

- **try**: Put the code that might throw an error inside the `try` block.
- **catch**: If an error occurs, the `catch` block will execute, letting handle the error gracefully
  instead of crashing the app.

For example, if we’re trying to create, update, or delete an invoice, we wrap the database operations in a `try/catch`. If something goes wrong (like a database error), we can return a helpful error message instead of letting the app break.

### 2. **The error.tsx File**

The `error.tsx` file is used to create a fallback UI for unexpected errors. Here’s how it works:

- **Client Component**: It needs to be a client component because it handles UI changes when an error occurs.
- **Props**: It takes two props:
  - `error`: This is the actual error that occurred.
  - `reset`: This is a function that can be called to try to recover from the error and re-render the UI.

When an error occurs, instead of a blank screen, the app will show a user-friendly message and a button that allows users to retry.

### 3. **Handling 404 Errors**

Not every error is about breaking the app. Sometimes a resource just isn’t found, like an invoice that doesn’t exist. This is where the `notFound` function comes in:

- **notFound**: This function is used to indicate that a requested resource (like an invoice) doesn’t exist.
  When we call it, it displays a specific 404 Not Found page instead of the generic error message.

### 4. **Creating a not-found.tsx File**

When we want to customize what users see when they hit a 404 error, we can create a `not-found.tsx` file:

- **Custom UI**: This file will define how the 404 page looks and what message users see. It can include
  links to help users navigate back to valid pages.

### Summary of Error Handling:

- Use `try/catch` in Server Actions to manage errors during operations (like database changes).
- Implement an `error.tsx` file for handling unexpected errors gracefully with a user-friendly UI.
- Use the `notFound` function to handle cases where a resource doesn’t exist and show a specific 404 page.
- Create a `not-found.tsx` file to customize the look of your 404 error page.
