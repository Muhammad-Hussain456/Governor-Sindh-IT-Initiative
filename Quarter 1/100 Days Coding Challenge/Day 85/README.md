Learn Nextjs:
https://nextjs.org/learn/react-foundations/installation
https://nextjs.org/learn/react-foundations/server-and-client-components

# Installing Next.js

## **Manual Installation**

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
     ```
   - Note any errors related to React Server Components and `useState`. You’ll need to fix these in the next steps.

9. **Automatic Layout Creation**:
   - Next.js will create a `layout.js` file in the `app` folder for shared UI elements.

## **Using `create-next-app`**
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

## Server and Client Components

To understand how Server and Client Components work, it's helpful to be familiar with two foundational web concepts:
= The environments your application code can be executed in: the server and the client.
= The network boundary that separates server and client code.
**Client Environment:**

- **Definition:** Refers to the browser on a user's device.
- **Function:** Sends requests to the server and renders the server’s responses into an interactive user interface.
- **Responsibilities:**
  - **Displaying Content:** Renders HTML, CSS, and media to create the visual interface.
  - **Handling User Interactions:** Manages events such as clicks, typing, and scrolling.
  - **Executing Client-Side Code:** Runs JavaScript and other client-side scripts to enhance interactivity and functionality.
  - **Maintaining State:** Stores session data, cookies, and local storage to remember user preferences and session details.
  - **Asynchronous Communication:** Uses AJAX or Fetch API to request and receive data from the server without reloading the page.

**Server Environment:**

- **Definition:** Refers to the computer or server in a data center that hosts application code.
- **Function:** Receives requests from clients, processes these requests, performs computations, and sends back responses.
- **Responsibilities:**
  - **Storing Application Code and Data:** Hosts the application logic, databases, and any other resources required to run the application.
  - **Handling Server-Side Logic:** Executes backend processes, including database queries, business logic, and authentication.
  - **Generating Responses:** Creates and sends HTML, JSON, or other data formats to be rendered by the client.
  - **Managing Sessions and Authentication:** Keeps track of user sessions and manages security aspects like login and authorization.
  - **Processing Requests:** Receives and interprets client requests, performs necessary computations, and sends back the appropriate response.

**Network Boundary:**

- **Definition:** The separation between server-side and client-side environments.
- **Role:** Defines where code execution occurs (on the server or in the browser) and how data is exchanged.
- **Implication:** Server-side code runs on the server and is responsible for backend processes, while client-side code runs in the browser and handles the user interface and interactions. Communication between server and client happens through HTTP requests and responses.

Now let's understand what are Server and Client Components and how they work.

## **Server Components**

**Concept**:

- Server Components are rendered on the server. They handle tasks like data fetching and initial content rendering.
- These components are useful for reducing the amount of JavaScript sent to the client and improving initial page load times.

**Examples**:

- **Fetching Data**: A component that fetches a list of blog posts from a database and renders them into HTML on the server.

  ```jsx
  // /app/posts.js (Server Component)
  async function fetchPosts() {
    const res = await fetch("https://api.example.com/posts");
    return res.json();
  }

  export default async function Posts() {
    const posts = await fetchPosts();
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }
  ```

- **Static Content**: A component that renders static content, like a footer or a header, that does not need to update dynamically.

  ```jsx
  // /app/footer.js (Server Component)
  export default function Footer() {
    return <footer>© 2024 My Company</footer>;
  }
  ```

## **Client Components**

**Concept**:

- Client Components are rendered on the client side and handle interactive features, such as user input and dynamic updates.
- They are ideal for managing state and handling user interactions.

**Examples**:

- **Interactive Button**: A component with a button that updates a counter when clicked.

  ```jsx
  // /app/like-button.js (Client Component)
  "use client"; // Ensures this component is rendered on the client

  import { useState } from "react";

  export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function handleClick() {
      setLikes(likes + 1);
    }

    return <button onClick={handleClick}>Like ({likes})</button>;
  }
  ```

- **Form Handling**: A component with a form that collects user input and handles form submission on the client side.

  ```jsx
  // /app/contact-form.js (Client Component)
  "use client";

  import { useState } from "react";

  export default function ContactForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(event) {
      event.preventDefault();
      // Handle form submission
      console.log("Email:", email);
      console.log("Message:", message);
    }

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
        />
        <button type="submit">Send</button>
      </form>
    );
  }
  ```

## **Network Boundary**

**Concept**:

- The Network Boundary is a conceptual line separating server-side and client-side code. It defines where data fetching and rendering responsibilities lie.
- You place this boundary in your component tree to optimize performance and interactivity.

**Examples**:

- **Server-Side Data Fetching**: Fetching and rendering data on the server, then sending it to the client.

  ```jsx
  // /app/user-profile.js (Server Component)
  async function fetchUserData(userId) {
    const res = await fetch(`https://api.example.com/users/${userId}`);
    return res.json();
  }

  export default async function UserProfile({ userId }) {
    const user = await fetchUserData(userId);
    return (
      <div>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </div>
    );
  }
  ```

- **Client-Side Interactivity**: Adding interactive components on the client, such as a dropdown menu that responds to user actions.

  ```jsx
  // /app/dropdown.js (Client Component)
  "use client";

  import { useState } from "react";

  export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown() {
      setIsOpen(!isOpen);
    }

    return (
      <div>
        <button onClick={toggleDropdown}>Toggle Dropdown</button>
        {isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    );
  }
  ```
