https://nextjs.org/learn/dashboard-app/improving-accessibility

# Improving Accessibility:

### 1. Accessibility Basics
 Accessibility involves designing web applications to be usable by everyone, including people with disabilities.
- **Areas of Focus**: This includes:
  - **Keyboard Navigation**: Ensuring all interactive elements can be accessed via keyboard.
  - **Semantic HTML**: Using HTML elements that convey meaning (e.g., `<header>`, `<footer>`, `<article>`).
  - **Images and Alt Text**: Providing alternative text for images to convey their purpose.
  - **Color Contrast**: Ensuring sufficient contrast between text and background colors for readability.
  - **Video Accessibility**: Providing captions and transcripts for video content.

### 2. Using ESLint for Accessibility
- **eslint-plugin-jsx-a11y**: This plugin helps catch common accessibility issues in React components.
- **Integration with Next.js**: By adding `next lint` to the `package.json`, developers can run accessibility checks.
- **Common Warnings**: Examples include missing `alt` attributes on images and improper use of ARIA roles.

### 3. Improving Form Accessibility
- **Semantic HTML in Forms**:
  - Use semantic elements like `<input>`, `<select>`, etc., instead of generic `<div>` tags.
  - This aids assistive technologies in navigating and understanding forms.
  
- **Labeling**:
  - Use `<label>` elements with the `htmlFor` attribute to create associations with input fields.
  - This enhances usability, allowing users to click on the label to focus the corresponding input.

- **Focus Outline**:
  - Ensuring input fields display an outline when focused, which helps users visually identify the active element.

### 4. Form Validation
- **Client-Side Validation**:
  - Basic validation can be done using HTML attributes like `required`, which prompts users before form submission if fields are empty.
  - This method relies on browser capabilities and may not be sufficient alone.

### 5. Implementing Server-Side Validation
- **Advantages of Server-Side Validation**:
  - Validates data format before processing or storing in the database.
  - Protects against malicious users who might bypass client-side validation.
  - Establishes a single source of truth for valid data.

- **Using useActionState**:
  - The `useActionState` hook manages form submission and state, allowing for error handling and response management.
  - It requires the form to be a Client Component, indicated by the `"use client"` directive.

### 6. Using Zod for Schema Validation
- **Defining Validation Schema**:
  - Zod is used to create a schema that defines the expected structure and constraints of form data.
  - Example schema might require fields like `customerId`, `amount`, and `status` with specific validation rules.

- **Handling Errors**:
  - The `.safeParse()` method is used to validate data, returning an object that indicates success or failure.
  - If validation fails, structured error messages can be returned to guide the user.

### 7. Displaying Errors in Forms
- **Accessing Errors**:
  - The form component can access error messages through the state managed by `useActionState`.
  
- **Rendering Error Messages**:
  - Use conditional rendering to display error messages near the corresponding form fields.
  - Implement `aria-describedby` to associate error messages with form controls, improving accessibility for screen reader users.

- **ARIA Attributes**:
  - **aria-live="polite"**: This attribute informs assistive technologies to announce changes to the error message without interrupting the user.
  - **id and aria-describedby**: These attributes link form elements with their respective error messages, ensuring that screen readers can convey this information effectively.
