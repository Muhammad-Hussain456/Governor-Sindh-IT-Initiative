https://nextjs.org/learn/dashboard-app/adding-metadata

# Adding Metadata
### What is Metadata?

Metadata is information about a webpage that isn’t directly visible to users. It's embedded in the HTML, typically within the `<head>` section, and serves to provide additional context about the content of the page.

**Importance**: 
- Enhances SEO by helping search engines understand the content of the page.
- Aids social media platforms in presenting content effectively when shared.
- Improves accessibility and indexing of webpages.

### Types of Metadata

1. **Title Metadata**:
   - **Function**: Defines the title of the webpage as shown on the browser tab.
   - **Example**: 
     ```html
     <title>Page Title</title>
     ```

2. **Description Metadata**:
   - **Function**: Offers a brief summary of the webpage content, often shown in search results.
   - **Example**: 
     ```html
     <meta name="description" content="A brief description of the page content." />
     ```

3. **Keyword Metadata**:
   - **Function**: Lists relevant keywords for the page, aiding in its indexing.
   - **Example**: 
     ```html
     <meta name="keywords" content="keyword1, keyword2, keyword3" />
     ```

4. **Open Graph Metadata**:
   - **Function**: Improves how a webpage is represented on social media, including title, description, and preview image.
   - **Example**:
     ```html
     <meta property="og:title" content="Title Here" />
     <meta property="og:description" content="Description Here" />
     <meta property="og:image" content="image_url_here" />
     ```

5. **Favicon Metadata**:
   - **Function**: Links to a favicon, which appears in the browser tab or address bar.
   - **Example**: 
     ```html
     <link rel="icon" href="path/to/favicon.ico" />
     ```

### Adding Metadata in Next.js

Next.js provides a **Metadata API** that allows for efficient management of metadata.

#### Two Ways to Add Metadata:

1. **Config-Based**:
   - You can export a static metadata object or a dynamic `generateMetadata` function in either a `layout.js` or `page.js` file.

2. **File-Based**:
   - Next.js recognizes specific files for metadata:
     - `favicon.ico`, `apple-icon.jpg`, `icon.jpg` for favicons.
     - `opengraph-image.jpg`, `twitter-image.jpg` for social media images.
     - `robots.txt` for search engine crawling instructions.
     - `sitemap.xml` for outlining the website's structure.

### Favicon and Open Graph Image

- Place your favicon and Open Graph images in the `/public` folder.
- Move these images to the root of your `/app` folder for automatic recognition by Next.js.

### Page Titles and Descriptions

You can create a metadata object in your root layout to manage common metadata:

```typescript
// /app/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
```

To customize page-specific titles, create a metadata object in the page file itself. This allows for overriding inherited metadata:

```typescript
// /app/dashboard/invoices/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoices | Acme Dashboard',
};
```

### Using Title Templates

To avoid repetition and facilitate updates, use the `title.template` feature:

```typescript
// /app/layout.tsx
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
```

