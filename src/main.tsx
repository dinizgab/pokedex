import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokemonPage from "./routes/PokemonPage";
import Root from "./routes/Root";
import Home from "./routes/Home";
import { Biography } from "./components/Biography";
import Stats from "./components/Stats";
import Evolutions from "./components/Evolutions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pokemon/:pokemonId/",
        element: <PokemonPage />,
        children: [
          {
            path: "/pokemon/:pokemonId/",
            element: <Biography/>
          },
          {
            path: "/pokemon/:pokemonId/stats",
            element: <Stats/>
          },
          {
            path: "/pokemon/:pokemonId/evolutions",
            element: <Evolutions/>
          }
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
