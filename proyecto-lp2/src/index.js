import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Screens/Home';
import Cliente from './Screens/Cliente';
import Producto from './Screens/Producto';
import Proveedor from './Screens/Proveedor';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/Cliente",
    element: <Cliente/>
  },
  {
    path: "/Producto",
    element: <Producto/>
  },
  {
    path: "/Proveedor",
    element: <Proveedor/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
