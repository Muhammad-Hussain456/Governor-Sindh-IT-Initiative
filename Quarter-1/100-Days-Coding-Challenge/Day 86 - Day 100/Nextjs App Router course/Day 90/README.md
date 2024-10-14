https://nextjs.org/learn/dashboard-app/fetching-data

## Fetching Data

### Choosing How to Fetch Data
- **APIs (Application Programming Interface)**:
  - **Definition**: A set of protocols for building and interacting with software applications.
  - **How It Works**: Our application sends requests to API endpoints, which process the requests and return data from a server or database.
  - **Use Cases**: Fetching data from third-party services or providing a secure way to access server data without exposing database credentials.
  - **Benefits**: Adds a layer of security, simplifies interactions with external services, and abstracts complexity.

- **Database Queries**:
  - **Definition**: Requests made to a database to retrieve or manipulate data, typically using SQL (Structured Query Language).
  - **How It Works**: We write queries that specify what data to retrieve or how to modify data, and the database processes these requests.
  - **Use Cases**: Retrieving specific records, updating, or deleting entries in the database.
  - **Benefits**: Provides precise control over data interactions, optimizes performance by fetching only necessary data.

###  Using Server Components to Fetch Data
- **Server Components**:
  - **Definition**: React components that run on the server rather than in the browser.
  - **How It Works**: They allow fetching data directly on the server side, making it accessible when the page is rendered.
  - **Benefits**: Simplifies asynchronous data fetching using promises, enhances security by avoiding exposure of sensitive information, and can directly query the database.

### Using SQL
- **SQL (Structured Query Language)**:
  - **Definition**: A standard language used for querying and managing data in relational databases.
  - **How It Works**: You write specific commands to retrieve, insert, update, or delete data from the database.
  - **Benefits**: Versatile and powerful for performing complex queries and data manipulations while ensuring efficient data retrieval.

- **Vercel Postgres SDK**:
  - **Definition**: A library that provides a simplified interface for interacting with PostgreSQL databases.
  - **Benefits**: Helps prevent SQL injection attacks and offers an easy way to write database queries.

### Fetching Data for the Dashboard Overview Page
- **Data Structure**:
  - Components like `Card`, `RevenueChart`, and `LatestInvoices` are used to display different types of data on the dashboard.

- **Fetching Methods**:
  - Use asynchronous functions to gather data for each component before rendering, ensuring that the dashboard displays up-to-date information.

###  What Are Request Waterfalls?
- **Waterfalls**:
  - **Definition**: A situation where each data request waits for the previous one to finish, leading to delays in loading times.
  - **Use Cases**: Sometimes beneficial when one request depends on the outcome of another (e.g., fetching user details before getting their friends).
  - **Disadvantages**: Can slow down performance when multiple independent requests are made sequentially.

###  Parallel Data Fetching
- **Promise.all()**:
  - **Definition**: A JavaScript method that allows multiple promises to run simultaneously.
  - **How It Works**: We can initiate multiple data requests at once, which can improve loading times and overall performance.
  - **Benefits**: Reduces the overall time for data fetching by allowing requests to execute concurrently, minimizing delays.

### Summary of Key Concepts
- **APIs**: Interfaces that facilitate secure communication between your app and external services.
- **Database Queries**: Direct requests to databases using SQL for precise data manipulation.
- **Server Components**: React components that fetch data on the server, enhancing security and performance.
- **SQL**: A powerful language for managing and querying relational databases.
- **Request Waterfalls**: Sequential data fetching that can slow down performance.
- **Parallel Data Fetching**: An approach to execute multiple data requests at once for faster performance.

