https://nextjs.org/learn/dashboard-app/setting-up-your-database

## Setting Up Your Database

### 1. **GitHub Integration**

**Concept**: Using GitHub for version control and as a deployment pipeline.

**Steps**:
1. **Push Project to GitHub**:
   - Create a GitHub repository if you haven’t already.
   - Initialize a local Git repository if your project isn’t already a Git repository:
     ```bash
     git init
     ```
   - Add your files to the repository:
     ```bash
     git add .
     ```
   - Commit your changes:
     ```bash
     git commit -m "Initial commit"
     ```
   - Add your GitHub repository as a remote:
     ```bash
     git remote add origin <your-github-repo-url>
     ```
   - Push your code to GitHub:
     ```bash
     git push -u origin main
     ```

2. **Create a GitHub Repository**:
   - Go to GitHub and create a new repository.
   - Follow the instructions provided to push an existing repository or create a new one.

### 2. **Vercel Setup**

**Concept**: Deploying your application using Vercel and integrating it with GitHub for automatic deployments.

**Steps**:
1. **Create a Vercel Account**:
   - Visit [Vercel's signup page](https://vercel.com/signup).
   - Sign up using GitHub for a seamless integration.

2. **Connect Vercel to GitHub**:
   - After signing up, you’ll be prompted to connect your GitHub account.
   - Authorize Vercel to access your GitHub repositories.

3. **Deploy Your Project**:
   - On the Vercel dashboard, click “New Project.”
   - Select the GitHub repository you pushed earlier.
   - Name your project and click “Deploy.”

4. **Automatic Deployments**:
   - Once connected, Vercel will automatically redeploy your application whenever you push changes to the `main` branch.
   - Pull requests will also trigger preview deployments.

### 3. **Database Creation**

**Concept**: Setting up a PostgreSQL database using Vercel’s integrated PostgreSQL service.

**Steps**:
1. **Create a PostgreSQL Database**:
   - In Vercel, navigate to your project dashboard.
   - Click on the “Storage” tab.
   - Click “Connect Store” and select “Postgres.”
   - Click “Continue” and accept the terms.
   - Assign a name to your database and choose the region (e.g., Washington D.C).
   - Click “Create” to set up your database.

2. **Configure Database Secrets**:
   - Go to the `.env.local` tab in Vercel.
   - Click “Show secret” and copy the database connection snippet.
   - Paste this snippet into a file named `.env` in your local project directory.

3. **Add `.env` to `.gitignore`**:
   - Open your `.gitignore` file.
   - Ensure `.env` is listed to prevent it from being pushed to GitHub:
     ```
     .env
     ```

4. **Install the Vercel Postgres SDK**:
   - Run the following command in your terminal to install the required package:
     ```bash
     pnpm i @vercel/postgres
     ```

### 4. **Seeding a Database**

**Concept**: Populating the database with initial data to work with.

**Steps**:
1. **Uncomment Seed File**:
   - Locate the `seed` folder inside `/app`.
   - Find and uncomment the `route.ts` file if it’s commented out.

2. **Run the Seed Script**:
   - Ensure your local development server is running:
     ```bash
     pnpm run dev
     ```
   - Open a browser and navigate to `http://localhost:3000/seed`.
   - Wait until you see a message like “Database seeded successfully.”

3. **Remove Seed File**:
   - After successful seeding, it’s a good practice to delete the seed file to prevent re-seeding.

### 5. **Troubleshooting**

**Concept**: Handling issues related to database seeding and compatibility.

**Steps**:
1. **Reveal Database Secrets**:
   - Ensure you have copied the database connection string from Vercel’s `.env.local` tab correctly.

2. **Handle bcrypt Issues**:
   - If bcrypt is causing issues, consider using `bcryptjs` instead.

3. **Drop Tables (if needed)**:
   - If you need to rerun the seeding script, drop existing tables using SQL commands like:
     ```sql
     DROP TABLE tablename;
     ```
   - Be cautious as this deletes the table and its data.

4. **Seek Help**:
   - If problems persist, open a discussion on GitHub or check Vercel’s support resources.

### 6. **Database Exploration**

**Concept**: Viewing and interacting with the database contents.

**Steps**:
1. **View Tables**:
   - Go to the Vercel dashboard.
   - Click “Data” on the sidebar to view the tables created (e.g., users, customers, invoices, revenue).

2. **Run SQL Queries**:
   - Use the “query” tab in Vercel to run SQL commands.
   - Example query to find specific records:
     ```sql
     SELECT invoices.amount, customers.name
     FROM invoices
     JOIN customers ON invoices.customer_id = customers.id
     WHERE invoices.amount = 666;
     ```
