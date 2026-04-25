# SCRUM-8: Small Website for School

This task involves creating a basic, static website for a school using React and CSS.

## Files Created:

*   `src/agent-tasks/SCRUM-8/SchoolWebsite.tsx`: This is the main React component for the school website. It includes a header with navigation, a hero section, and several information sections (About Us, Admissions, Contact).
*   `src/agent-tasks/SCRUM-8/SchoolWebsite.css`: This file contains the CSS styles for the `SchoolWebsite.tsx` component, providing a clean and responsive design.

## Usage (Example):

To integrate this component into an existing React application, you would typically import and render it in your `App.tsx` or a similar root component:

```typescripttsx
import React from 'react';
import SchoolWebsite from './agent-tasks/SCRUM-8/SchoolWebsite';

function App() {
  return (
    <div className="App">
      <SchoolWebsite />
    </div>
  );
}

export default App;
```

This component provides a foundational structure for a small school website, which can be further expanded with more features, dynamic content, and advanced styling as needed.