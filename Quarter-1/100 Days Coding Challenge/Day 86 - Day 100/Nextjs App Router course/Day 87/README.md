https://nextjs.org/learn/dashboard-app/css-styling
https://nextjs.org/learn/dashboard-app/optimizing-fonts-images

## CSS Styling:

### 1. **Global Styles**
   - **Global CSS File**: A stylesheet that applies to the entire application. It can include global resets, site-wide styles, and element-specific styles.
   - **global.css**: The file where you add global CSS rules. In the example, it includes Tailwind directives for base styles, components, and utilities.

### 2. **Tailwind CSS**
   - **Tailwind CSS**: A utility-first CSS framework that provides predefined classes for styling elements directly in your HTML or JSX. It speeds up development and avoids traditional CSS issues.
   - **Tailwind Directives**: Special directives used in Tailwind CSS:
     - **@tailwind base**: Applies Tailwind's base styles, including CSS resets.
     - **@tailwind components**: Includes predefined Tailwind component classes.
     - **@tailwind utilities**: Applies utility classes for styling.
   - **Utility Classes**: Predefined classes in Tailwind that apply specific styles. For example, `text-blue-500` applies a blue color to text.

### 3. **CSS Modules**
   - **CSS Modules**: A method of scoping CSS to specific components by generating unique class names automatically. This helps avoid style collisions and maintains encapsulation.
   - **home.module.css**: A CSS file where you define styles specific to a component. The styles are scoped locally, meaning they won’t affect other components.
   - **CSS Classes in CSS Modules**: Classes defined in CSS Modules are unique to the component, avoiding global style conflicts.

### 4. **clsx**
   - **clsx**: A utility library for conditionally applying class names based on dynamic conditions. It simplifies toggling class names depending on component states or props.
   - **Conditional Class Names**: Using `clsx` to apply classes based on conditions. For example, different background colors for `'paid'` and `'pending'` statuses.

### 5. **Other Styling Solutions**
   - **Sass**: A CSS preprocessor that extends CSS with features like variables, nesting, and mixins. Sass files can be `.scss` or `.sass`, and they can be imported into your application alongside standard `.css` files.
   - **CSS-in-JS Libraries**: Libraries that allow writing CSS styles directly within JavaScript or TypeScript files. Examples include:
     - **styled-jsx**: A library for scoped CSS within JavaScript files.
     - **styled-components**: A library for writing component-level styles using tagged template literals.
     - **emotion**: A library for writing CSS styles with JavaScript, providing powerful and flexible styling capabilities.

### 1. **Utility**
   - **Utility (in Tailwind CSS context)**: Refers to a class that applies a single, specific style or a small set of related styles. Tailwind CSS is built around utility classes, allowing you to quickly apply styles by combining these single-purpose classes. For example, `text-blue-500` is a utility class in Tailwind CSS that applies a specific shade of blue to text, while `p-4` applies padding.

   - **Utility Classes**: In Tailwind, these classes are used to control individual CSS properties like margins, padding, colors, fonts, and more. They enable rapid styling without needing to write custom CSS rules.

### 2. **Directives**
   - **Directives (in Tailwind CSS context)**: Special instructions used within CSS files to include various Tailwind CSS functionalities. These directives help to inject Tailwind's default styles into your CSS.

     - **@tailwind base**: This directive includes Tailwind's base styles, which typically consist of a CSS reset and default styling for elements.
     - **@tailwind components**: This directive includes Tailwind’s predefined component styles, which you can use to build UI elements quickly.
     - **@tailwind utilities**: This directive includes Tailwind's utility classes, which you use to apply individual styles directly in your HTML or JSX.

   Directives are specific to Tailwind CSS and help organize and apply Tailwind's styles in your application.

### 3. **Invoice**
   - **Invoice (in the context of the example)**: Refers to a component or a part of the application dealing with invoice statuses. In the example provided, it’s used to illustrate how to apply conditional styling based on the status of an invoice.

     - **InvoiceStatus Component**: A React component that displays the status of an invoice. Depending on whether the status is 'pending' or 'paid', different styles are applied using conditional class names. This is an example of how you might use the `clsx` library to manage styling dynamically based on component props or state.

### Summary
- **Utility**: In Tailwind CSS, it refers to classes that apply individual CSS properties.
- **Directives**: Special instructions in Tailwind CSS used to include base styles, components, and utilities into your CSS.
- **Invoice**: Represents a component or part of an application that might display and style invoice statuses, used in the example to demonstrate conditional styling with `clsx`.


## Optimizing Fonts and Images:

### 1. **Optimizing Fonts**

- **Custom Fonts**: Fonts that are not the default system fonts and are imported from services like Google Fonts. Custom fonts can enhance the design of a website but might affect performance if not managed properly.

- **Cumulative Layout Shift (CLS)**: A performance metric used by Google to measure the visual stability of a webpage. CLS occurs when elements shift around the page as fonts load, causing text to swap from fallback fonts to custom fonts.

- **next/font**: A Next.js module used to optimize fonts. It downloads font files during the build process and serves them with your static assets, eliminating additional network requests and improving performance.

- **Inter Font**: An example of a Google Font imported using `next/font/google` to be used throughout an application. You specify subsets (like 'latin') and apply the font to the `<body>` element in the layout.

- **Antialiased Class**: A Tailwind CSS class used to smooth the appearance of fonts.

- **Adding Secondary Fonts**: Importing and using additional fonts (e.g., Lusitana) for specific elements, demonstrating how to apply different fonts within the application.

### 2. **Optimizing Images**

- **Static Assets**: Files like images placed in the `/public` folder of a Next.js application. These can be directly referenced in the application.

- **Image Optimization**: The process of improving image performance through techniques like responsive sizing, lazy loading, and serving images in modern formats. This helps reduce layout shifts and loading times.

- **next/image**: A Next.js component that automatically handles image optimization. It provides features like:
  - **Automatic Layout Shift Prevention**: Ensures images do not cause unexpected changes in the layout as they load.
  - **Responsive Sizing**: Adjusts image sizes based on the device's viewport.
  - **Lazy Loading**: Images are loaded only when they enter the viewport.
  - **Modern Formats**: Images can be served in formats like WebP and AVIF if supported by the browser.

- **Hero Images**: Large images that are prominently displayed on a webpage, often used for visual impact. Examples include `hero-desktop.png` and `hero-mobile.png`, which are used conditionally based on the device's screen size.

### 3. **Practical Implementation**

- **Importing and Using Images**: Importing the `<Image>` component from `next/image` and using it to display images with specific dimensions to avoid layout shifts.

- **Responsive Images**: Using CSS classes like `hidden` and `md:block` to control which images are displayed based on the screen size (desktop vs. mobile).

