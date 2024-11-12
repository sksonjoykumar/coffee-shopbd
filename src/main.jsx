import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GlobalContext from "./global-context/GlobalContext.jsx";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom/dist/index.js";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContext>
    <RouterProvider router={router} />
  </GlobalContext>
);
