import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.js"; // Import routes configuration
// Create the router object using createBrowserRouter
const router = createBrowserRouter(routes);

// Render the RouterProvider with the defined router
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
