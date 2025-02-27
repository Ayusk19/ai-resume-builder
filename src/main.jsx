import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignInPage from './auth/sign-in/index.jsx';
import Home from './Home/Index.jsx'; // Ensure Home is a separate component
import Dashboard from './Dashboard/Index.jsx';
import { ClerkProvider } from '@clerk/clerk-react'


// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const router = createBrowserRouter([
  {
    element: <App />, // Main layout component
    children: [
      
      {
        path: '/Dashboard',
        element: <Dashboard />,
      }
    ],
  },
  {
    path: '/', // Default route
    element: <Home />, // Render Home here
  },

  {
    path: '/auth/sign-in',
    element: <SignInPage />, // Separate route for Sign-In
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
