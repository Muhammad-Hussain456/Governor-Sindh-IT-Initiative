https://nextjs.org/learn/dashboard-app/streaming

## Streaming:

Streaming is a technique that allows the server to send parts of a web page to the client progressively, rather than waiting for all data to be ready.
**Benefits**:

- Improves perceived performance.
- Users can interact with parts of the page while other sections are still loading.

### Implementation of Streaming

- **Page Level**:

  - Use a special file called `loading.tsx` in the route folder (e.g., `/app/dashboard/loading.tsx`).
  - This file defines fallback UI (like loading messages or skeletons) displayed while the main content loads.

- **Component Level**:
  - Use React’s `<Suspense>` component to wrap around specific components.
  - This allows individual components to show fallback UI while they fetch their own data.

### Loading Skeletons

Loading skeletons are placeholder elements that mimic the layout of the content that is loading, providing a visual cue to the user.
**Implementation**:

- Replace the loading text in `loading.tsx` with a loading skeleton component.

### Route Groups

Organize files logically without affecting the URL structure.
**Usage**:
Enclose folders in parentheses (e.g., `/(overview)`) to separate files, ensuring specific loading states only apply to certain pages.

### Placing Suspense Boundaries

- Determine the user experience you want to achieve.
- Prioritize which content should load first based on user needs.
- Balance between granular control (individual components) and minimizing UI popping (grouping).

### Streaming Components with Suspense

- Move data fetching logic into the component that needs the data.
- Wrap the component with `<Suspense>` and provide a fallback UI.

### Grouping Components

Instead of streaming components individually (which can cause popping), group components in a wrapper and stream that.

- **Example**:
  Create a `CardWrapper` that loads multiple `<Card>` components together.

### Best Practices for Using Suspense

- Move data fetching down to components that require it.
- Create Suspense boundaries around these components to allow for individual streaming.
- Experiment with boundaries to see what gives the best user experience.

### Summary of Key Concepts

- **Streaming**: Progressive loading of page elements.
- **Loading.tsx**: Provides fallback UI at the page level.
- **Suspense**: Handles async data fetching at the component level.
- **Loading Skeletons**: Enhances UX by providing visual placeholders.
- **Route Groups**: Organizes files without changing URLs.
- **Placing Suspense**: Depends on user experience goals and content priorities.
- **Grouping**: Combats UI popping effects by wrapping components.
