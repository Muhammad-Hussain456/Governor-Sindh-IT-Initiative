https://nextjs.org/learn/dashboard-app/mutating-data

# Mutating Data

### Key Concepts Explained

1. **React Server Actions**:
   - **What They Are**: These are functions that run on the server and allow to  modify data directly without creating separate API endpoints.
   - **Why Use Them**: They enhance security and simplify the process of data handling in our application. For instance, they handle things like ensuring only valid data is processed, and they work well with forms.

2. **Using Forms with Server Actions**:
   - **How It Works**: When we create a form in our React app, we can specify a Server Action in the `action` attribute of the `<form>`. This automatically sends the form data to the server when the form is submitted.
   - **FormData**: This is a built-in object that collects the data from the form inputs, making it easy to work with.

3. **Data Validation**:
   - **Importance of Validation**: When we get data from a form, it might not always be in the correct format. For example, numbers might come in as strings.
   - **Using Libraries**: Libraries like Zod help us define rules for what valid data looks like, making it easier to ensure that the data fits your expectations before using it in our database.

4. **Dynamic Routing**:
   - **Creating Routes**: we can create dynamic routes in Next.js by naming folders with square brackets, like `[id]`. This allows us to handle different items (like invoices) using the same route structure.
   - **Example**: If we have invoices with different IDs, we can access them through URLs like `/invoices/1`, `/invoices/2`, etc.

5. **Database Operations**:
   - **Inserting and Updating Data**: When we receive validated data from a form, we can use SQL queries to add or modify records in our database.
   - **Handling Money**: It’s often better to store monetary values as integers (like cents) to avoid problems with decimal precision.

6. **Cache Management**:
   - **Why It's Important**: Next.js caches data to make our app faster. When we change data (like adding or deleting an invoice), we want to refresh this cache to show the most current information.
   - **How to Refresh**: Use the `revalidatePath` function to tell Next.js to fetch fresh data for a specific route after a mutation.

7. **User Redirection**:
   - **After Actions**: After creating, updating, or deleting data, we usually want to take the user back to a relevant page. This can be done with the `redirect` function in Next.js.

8. **Progressive Enhancement**:
   - **What It Means**: Our forms should still work even if a user has JavaScript turned off. This makes our app more robust and accessible.

### Step-by-Step Implementation

#### Creating an Invoice

1. **Set Up the Form**:
   - Create a form with inputs for the customer, amount, and status.
   - Use the `action` attribute to call a Server Action when the form is submitted.

2. **Create the Server Action**:
   - Write a function to handle the form submission on the server.
   - Extract the data from the `FormData` object and validate it.

3. **Insert Data into the Database**:
   - Prepare the data (e.g., convert the amount to cents).
   - Use an SQL query to insert the data into your database.

4. **Refresh the Cache and Redirect**:
   - After successful insertion, call `revalidatePath` for the invoices page.
   - Use `redirect` to send the user back to the invoices list.

#### Updating an Invoice

1. **Set Up Dynamic Routes**:
   - Create a route that includes the invoice ID (e.g., `/invoices/[id]/edit`).
   - Fetch the existing invoice data based on the ID and display it in the form.

2. **Update the Server Action**:
   - Modify the action to take the ID as an argument, so it knows which record to update.
   - Validate the updated data and run an SQL query to change the invoice in the database.

3. **Refresh the Cache and Redirect**:
   - Similar to creating an invoice, ensure you refresh the cache and redirect after updating.

#### Deleting an Invoice

1. **Create a Delete Button**:
   - Wrap the delete button in a form and set the action to call the delete Server Action.

2. **Create the Delete Server Action**:
   - Write a function to delete the invoice from the database using its ID.
   - Use `revalidatePath` to refresh the invoice list after deletion.

