https://nextjs.org/learn/dashboard-app/adding-authentication

# Adding Authentication:

### 1. **Understanding Authentication**
    Authentication is the process of verifying a user's identity. This typically involves checking credentials such as a username and password.
   - **Multi-factor Authentication (MFA)**: This adds extra layers of security by requiring additional verification methods, like a verification code sent to a mobile device.

### 2. **Authentication vs. Authorization**
   - **Authentication**: Confirms who the user is (e.g., via credentials).
   - **Authorization**: Determines what resources or actions the authenticated user is permitted to access. Essentially, authorization is about permissions.

### 3. **Setting Up NextAuth.js**
   - **NextAuth.js**: A library that simplifies the implementation of authentication in Next.js applications, handling sessions, sign-in/sign-out, and provider integrations.
   - **Installation**: Adding NextAuth.js via package managers (like `pnpm`) and ensuring compatibility with the Next.js version you’re using.

### 4. **Environment Variables**
   - **Secure Key Generation**: Generating a secret key for signing cookies helps to secure sessions. This key must be kept secret and is typically stored in environment variables.

### 5. **Custom Sign-In Pages**
   - **Custom Routing**: By using the `pages` option in the NextAuth.js configuration, you can redirect users to a custom login page instead of the default one.

### 6. **Middleware for Route Protection**
   - **Next.js Middleware**: Allows you to run code before a request is completed, useful for protecting routes. Middleware can redirect unauthenticated users and control access to certain pages.
   - **Matcher**: A configuration that specifies which paths the middleware should apply to, enhancing performance and security.

### 7. **Password Hashing**
   - **Hashing**: A technique to securely store passwords. Hashing converts passwords into a fixed-length string, making it difficult to retrieve the original password.
   - **Using bcrypt**: A library for hashing and comparing passwords, providing a secure way to validate user credentials.

### 8. **Credentials Provider**
   - **Provider Configuration**: NextAuth.js supports various authentication methods; in this case, the Credentials provider is used for username/password logins.
   - **Authorize Function**: A method that contains the logic to validate user credentials against stored data (e.g., in a database).

### 9. **Error Handling and User Feedback**
   - **Form Handling**: Utilizing hooks like `useActionState` in React to manage form submission states (pending, error) and provide feedback to users about login attempts.
   - **Displaying Errors**: Providing meaningful error messages based on authentication results to improve user experience.

### 10. **Logout Functionality**
   - **Sign-Out Process**: Implementing the ability for users to log out securely. This is typically done through a form that calls a server action to clear the user session.

### 11. **Database Interaction**
   - **User Fetching**: Using SQL queries to retrieve user data from a database. This is essential for validating credentials during the authentication process.

### 12. **Client-Server Communication**
   - **Server Actions**: Mechanisms in Next.js for executing server-side code in response to client-side actions, such as logging in or logging out.
