https://nextjs.org/learn/dashboard-app/adding-search-and-pagination

# Adding search and pagination:

### Key Concepts

1. **Next.js Client and Server Components**:
   - **Client Components** (e.g., `<Search>` and `<Pagination>`): These components can use React hooks and handle user interactions directly.
   - **Server Components** (e.g., `<Table>`): These are used to fetch data from the server and render it, making them suitable for initial data loading.

2. **Using URL Search Params**:
   - URL search parameters (like `?query=pending&page=1`) are used to manage application state directly in the URL. This allows users to share and bookmark specific states of the application.

3. **Client Hooks**:
   - **`useSearchParams`**: Accesses the current URL’s search parameters, allowing the component to read user inputs from the URL.
   - **`usePathname`**: Provides the current path of the URL, useful for constructing new URLs.
   - **`useRouter`**: Allows programmatic navigation within the application, such as updating the URL without reloading the page.

### Implementation Steps

1. **Capture User Input**:
   - In the `<Search>` component, create an input field that captures the user’s search term. Handle input changes with an `onChange` event.

2. **Update URL with Search Params**:
   - When the user types, create a new `URLSearchParams` instance to manage the query string. Update the search parameters in the URL using the `replace` method from the `useRouter` hook.

3. **Sync Input with URL**:
   - Set the `defaultValue` of the input field based on the search parameter from the URL. This keeps the input field in sync with what’s in the URL.

4. **Update the Table Component**:
   - Pass the current search query and page number to the `<Table>` component. This allows it to fetch and display the correct invoices based on the search criteria.

5. **Debouncing**:
   - Implement debouncing to limit the number of times the search function is triggered as the user types. This improves performance by reducing unnecessary requests to the server. A library like `use-debounce` can help manage this.

### Adding Pagination

1. **Fetch Total Pages**:
   - Create a function (`fetchInvoicesPages`) that calculates the total number of pages based on the current search query. We need to fetch this information on the server.

2. **Update the `<Pagination>` Component**:
   - Similar to the search feature, the `<Pagination>` component uses `usePathname` and `useSearchParams` to manage the pagination state in the URL.
   - Implement a `createPageURL` function to build the new URL for navigating to different pages.

3. **Reset Page on New Search**:
   - When the user performs a new search, reset the pagination to the first page by updating the page number in the search parameters.

### Summary of Benefits

- **Bookmarkable and Shareable URLs**: Users can easily share or save specific views.
- **Server-Side Rendering**: Initial page loads can be rendered based on URL parameters, improving performance.
- **Reduced Database Load**: Debouncing minimizes the number of requests made to the server, making the application more efficient.

By leveraging URL search parameters and combining them with Next.js’s routing capabilities, we create a smoother and more efficient user experience for searching and navigating through invoices.