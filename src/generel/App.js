import "../App.css";
import Home from "./Home";
import Battle from "../battle/index.js";
import Popular from "../popular/index.js";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Nav from "./Nav";
import Results from "../battle/Results.js";

const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/popular",
        element: <Popular />,
      },
      {
        path: "/battle",
        element: <Battle />,
      },
      {
        path: "battle/results",
        element: <Results />,
      },
      {
        path: "*",
        element: (
          <h1>
            Error! Go <Link href="/">home</Link>
          </h1>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
