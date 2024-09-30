Learn React:
https://react.dev/learn
https://nextjs.org/learn/react-foundations

### Updating the UI with JavaScript and React:

### JavaScript

1. **Direct DOM Manipulation**: JavaScript updates the UI by directly manipulating the DOM elements. This can be efficient for simple tasks but may become cumbersome and slow for complex UIs with frequent updates.
2. **Imperative Approach**: You need to explicitly define the steps to update the UI. This means writing more code to handle the state and changes.
3. **Performance**: Direct DOM manipulation can lead to performance issues, especially with large and complex applications, as each change can trigger reflows and repaints.
4. **Flexibility**: JavaScript offers more control and flexibility since you can manipulate the DOM in any way you want.
5. **Learning Curve**: Easier to start with if you are familiar with basic HTML, CSS, and JavaScript.

### React

1. **Virtual DOM**: React uses a virtual DOM to optimize UI updates. Changes are first applied to the virtual DOM, and then the minimal necessary changes are made to the actual DOM, improving performance.
2. **Declarative Approach**: You describe what the UI should look like for a given state, and React takes care of updating the DOM to match that state. This can lead to more readable and maintainable code.
3. **Component-Based Architecture**: React encourages breaking down the UI into reusable components, which can make development more modular and easier to manage.
4. **State Management**: React provides built-in state management, making it easier to handle dynamic data and UI updates.
5. **Ecosystem and Tools**: React has a rich ecosystem with tools like Redux for state management, React Router for navigation, and many others that can enhance development.

### Using React with JSX and Babel:

1. **Loading React and ReactDOM**:

   - Load React and ReactDOM scripts from unpkg.com:
     ```html
     <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
     <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
     ```

2. **Creating a Root and Rendering with React**:

   - Use `ReactDOM.createRoot()` to target a specific DOM element and create a root.
   - Use `root.render()` to render React components:
     ```html
     <script>
       const app = document.getElementById("app");
       const root = ReactDOM.createRoot(app);
       root.render(<h1>Develop. Preview. Ship.</h1>);
     </script>
     ```

3. **Understanding JSX**:

   - JSX is a syntax extension for JavaScript that allows you to write HTML-like syntax within JavaScript.
   - Browsers don't understand JSX natively, so it needs to be transformed into regular JavaScript using a compiler like Babel.

4. **Adding Babel to Your Project**:

   - Add Babel to your project to transform JSX code:
     ```html
     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
     ```
   - Change the script type to `type="text/jsx"` to inform Babel to transform the code:
     ```html
     <script type="text/jsx">
       const domNode = document.getElementById('app');
       const root = ReactDOM.createRoot(domNode);
       root.render(<h1>Develop. Preview. Ship.</h1>);
     </script>
     ```

### Comparing Declarative and Imperative Code:

Imperative programming is like giving a chef step-by-step instructions on how to make a pizza.
Declarative programming is like ordering a pizza without being concerned about the steps it takes to make the pizza.

- Declarative React code with JSX:

  ```html
  <script type="text/jsx">
    const domNode = document.getElementById("app");
    const root = ReactDOM.createRoot(domNode);
    root.render(<h1>Develop. Preview. Ship.</h1>);
  </script>
  ```

- Imperative JavaScript code:
  ```html
  <script type="text/javascript">
    const app = document.getElementById("app");
    const header = document.createElement("h1");
    const text = "Develop. Preview. Ship.";
    const headerContent = document.createTextNode(text);
    header.appendChild(headerContent);
    app.appendChild(header);
  </script>
  ``
  ```
