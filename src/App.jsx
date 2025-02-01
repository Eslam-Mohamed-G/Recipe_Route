import React from "react";
import "./App.scss";
import "./App.css";
import Home from "./components/2_home/Home";
import Layout from "./components/layout/Layout";
import NotFound from "./components/notFound/NotFound";
import AreaMeals from "./components/3_areaMeals/AreaMeals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContextAPIProvider from "./components/Context/ContextAPIProvider";
import Details from "./components/4_details/Details";
import Meals from "./components/5_meals/Meals";
import Ingredients from "./components/6_ingredients/Ingredients";
import Area from "./components/7_area/Area";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: ':area', element: <AreaMeals /> },
        { path: '*', element: <NotFound /> }
      ],
    },
    { path: '/meals/:category', element: <Meals/>, },
    { path: '/ingredients', element: <Ingredients/>, },
    { path: '/area', element: <Area/>, },
    { path: '/:area/:meal/:id', element: <Details /> },
    { path: '/:nav/:category/:name/:id', element: <Details/>, },
  ]);

  return (
    <ContextAPIProvider>
      <RouterProvider router={routes} />
    </ContextAPIProvider>
  );
}

export default App;
