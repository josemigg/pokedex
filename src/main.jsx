import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import PokemonList from "./PokemonList";
import PokemonDetails from "./PokemonDetails";
import ProjectDetails from "./ProjectDetails";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Esto está roto</div>,
    children: [
      { index: true, element: <PokemonList /> },
      {
        path: "pokemon/:pokemonId",
        element: <PokemonDetails />,
      },
      {
        path: "projects/:projectId",
        element: <ProjectDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
