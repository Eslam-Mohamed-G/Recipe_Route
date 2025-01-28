import React from "react";
import "./App.scss";
import { useState } from "react";
import Home from "./components/2_home/Home";
import Layout from "./components/layout/Layout";
import NotFound from "./components/notFound/NotFound";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContextAPIProvider from "./components/Context/ContextAPIProvider";

function App() {
  const [state, setstate] = useState();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: '*', element: <NotFound /> }
      ],
    },
  ]);

  return (
    <ContextAPIProvider>
      <RouterProvider router={routes} />
    </ContextAPIProvider>
  );
}

export default App;
