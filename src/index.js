import * as ReactDOMClient from 'react-dom/client';
import App from './App'; // Assuming your app component is in App.jsx
import React from 'react'; // You can still import React for JSX syntax

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
