Learn React:
https://react.dev/learn
https://nextjs.org/learn/react-foundations

### React Core Concepts

### 1. Components

**Components** are the building blocks of a React application. They allow you to split the UI into independent, reusable pieces that can be managed separately. Components can be either **class components** or **function components**.

- **Function Component**: A simple way to create a component using a JavaScript function.

  ```jsx
  function Greeting() {
    return <h1>Hello, world!</h1>;
  }
  ```

- **Class Component**: A more feature-rich way to create a component using ES6 classes.

  ```jsx
  class Greeting extends React.Component {
    render() {
      return <h1>Hello, world!</h1>;
    }
  }
  ```

### 2. Props
https://react.dev/learn/passing-props-to-a-component
**Props** 
(short for properties) are used to pass data from one component to another, typically from a parent component to a child component. Props are read-only, meaning they cannot be modified by the child component.

- **Passing Props**: In the parent component, you pass data to the child component via `attributes`.

  ```jsx
  function ParentComponent() {
    const message = "Hello from Parent!";
    return <ChildComponent message={message} />;
  }
  ```

- **Receiving Props**: In the child component, you access the props using `props` object.

  ```jsx
  function ChildComponent(props) {
    return <p>{props.message}</p>;
  }
  ```

### 3. State
https://react.dev/learn/adding-interactivity

In React, state determine the current condition or status of a component. It encapsulates data that can change over time, affecting how the component renders and behaves.
**State** is a `built-in object` that allows `components` to create and manage their own data. Unlike props, state is mutable and can be changed within the component. 
State is primarily used in class components, but with the introduction of `hooks`, it can also be used in function components.
State acts as the memory of a component, allowing it to remember and update information over time.
Note: In React, data flows down the component tree. This is referred to as one-way data flow. State, can be passed from parent to child components as props.
You can think of state as any information in your UI that changes over time, usually triggered by user interaction.

Note: Unlike props which are passed to components as the first function parameter, the state is initiated and stored within a component. You can pass the state information to children components as props, but the logic for updating the state should be kept within the component where state was initially created.

### Hooks:
In React, functions starting with `use` are called Hooks that allow you to use `state`, `side effects` and other React features without 
writing a class. Hooks were introduced in the 16.8 version of React.

Here are some of the most commonly used hooks:

### 1. `useState`
Allows you to add state to functional components.
You’ll get two things from a Hook(useState): the current state (count), and the function that lets you update it (setCount). You can give them any names, but the convention is to write [something, setSomething]. 
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### 2. `useEffect`
Handles `side effects` such as `data fetching`, `subscriptions`, or `manually changing the DOM`.

`Side effects` are operations that can affect something outside the scope of the function, such as fetching data, updating the DOM, subscribing to an event, or modifying global state.

Some common examples of side effects include:
Fetching Data: You might need to fetch data from an API or a server and update the component state with the retrieved data.
Setting up Subscriptions: You may want to subscribe to a service or listen for events (e.g., WebSocket connections or event listeners).
Manual DOM Manipulation: Sometimes you may need to directly manipulate the DOM (e.g., focus on an input field or scroll to a certain position).
Timers: Starting or clearing timers like setTimeout or setInterval.
Cleanups: Performing cleanup operations like unsubscribing from a service or clearing timers when a component unmounts.

```jsx
import React, { useEffect, useState } from 'react';

function Example() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty dependency array means this runs once on mount
  
  return (
    <div>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
}
```

### 3. `useContext`
Accesses the value of a React `context`.
In React, `context` is a mechanism that allows you to share values between components without explicitly passing props through every level of the component tree. It is useful for scenarios where data needs to be accessible by many components at different nesting levels, such as themes, user authentication, or localization settings.

```jsx
import React, { useContext } from 'react';

const MyContext = React.createContext();

function ChildComponent() {
  const value = useContext(MyContext);
  
  return <p>{value}</p>;
}

function ParentComponent() {
  return (
    <MyContext.Provider value="Hello, World!">
      <ChildComponent />
    </MyContext.Provider>
  );
}
```

### 4. `useReducer`
An alternative to `useState` for managing complex state logic.

```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

### 5. `useMemo`
Memoizes a value to optimize performance for expensive calculations.

```jsx
import React, { useMemo, useState } from 'react';

function ExpensiveComponent({ num }) {
  const computeExpensiveValue = (num) => {
    // Simulate expensive computation
    let i = 0;
    while (i < 1000000000) i++;
    return num * 2;
  };

  const computedValue = useMemo(() => computeExpensiveValue(num), [num]);
  
  return <p>Computed Value: {computedValue}</p>;
}
```

### 6. `useCallback`
Memoizes a callback function to avoid unnecessary re-creations on re-renders.

```jsx
import React, { useCallback, useState } from 'react';

function Child({ onClick }) {
  console.log('Child rendered');
  
  return <button onClick={onClick}>Click me</button>;
}

function Parent() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  
  return (
    <div>
      <p>Count: {count}</p>
      <Child onClick={handleClick} />
    </div>
  );
}
```

### 7. `useRef`
Provides a mutable object that persists across renders, useful for accessing DOM elements or storing mutable values.

```jsx
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);
  
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}
```
These are just a few of the hooks available in React. They help simplify component logic, make code more readable, and encourage the use of functional components.

- **Using State in Class Components**:
In class components, state is typically a single object that holds a set of related variables.
  ```jsx
  class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userName: '',
      isLoggedIn: false,
    };
  }
  // Methods to update state and render...
}
```

- **Using State in Function Components with Hooks**:
In functional components, state is managed as multiple individual variables using hooks, with each variable managed separately.
  ``` jsx
  import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Functions to update state and render...
}
```

**Component Trees**

- **Definition**: Hierarchical structure of nested components.
- **Functionality**: Allows for organized and maintainable code.
- **Example**: A `HomePage` component containing `Header`, `Article`, and `Footer` components.

### Display data using props in React:

In React, props (short for properties) are used to pass data from one component to another, typically from a parent component to a child component.

1. **Define the Parent Component**: This component will hold the data you want to pass down.

```jsx
import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const data = "Hello from Parent!";
  return (
    <div>
      <ChildComponent message={data} />
    </div>
  );
}

export default ParentComponent;
```

2. **Create the Child Component**: This component will receive the data as props and display it.

```jsx
import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
}

export default ChildComponent;
```

3. **Using Props in the Child Component**: The `ChildComponent` receives the `message` prop and displays it inside a paragraph tag.

### Explanation

- **ParentComponent**: This component defines a piece of data (`data`) and passes it to `ChildComponent` via the `message` prop.
- **ChildComponent**: This component receives the `message` prop and renders it inside a `<p>` tag.
