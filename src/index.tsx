import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import FilmList from "./routes/films";
import Login from "./Components/login";
import Profile from "./Components/profiles";
import CreateProfile from "./Components/create";
import Accountsettings from "./Components/accountsettings";
const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <h1>Hi Mark otto Welcome the Madness!</h1>
            <h3 className="section-heading homemovies">
              New on Movie Madness:
            </h3>
          </div>
        ),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/films",
        element: <FilmList />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/Create",
        element: <CreateProfile />,
      },
      {
        path: "/settings",
        element: <Accountsettings />,
      },
      {
        path: "/signout",
        element: <h1>Signout</h1>,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
