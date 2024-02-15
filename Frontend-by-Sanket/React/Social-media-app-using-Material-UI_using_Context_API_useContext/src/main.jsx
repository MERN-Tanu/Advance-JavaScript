import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import UserDetails from "./components/UserDetails/UserDetails.jsx";

import { BrowserRouter } from "react-router-dom";

// const customeRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/user/:id",
//     element: <UserDetails />,
//   },
//   {
//     path: "/about",
//     element: <div>About</div>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={customeRouter} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
