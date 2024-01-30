import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Bag from "./routes/Bag.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={myntraStore}>
    <RouterProvider router={router} />
  </Provider>
);
