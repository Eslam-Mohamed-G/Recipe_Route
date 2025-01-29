import React from "react";
import "./App.scss";
import Home from "./components/2_home/Home";
import Layout from "./components/layout/Layout";
import NotFound from "./components/notFound/NotFound";
import AreaMeals from "./components/3_areaMeals/AreaMeals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContextAPIProvider from "./components/Context/ContextAPIProvider";
import Details from "./components/4_details/Details";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: ':area', element: <AreaMeals /> },
        { path: '/:area/:meal/:id', element: <Details /> },
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
