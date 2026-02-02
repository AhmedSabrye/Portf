import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectsPage from "./Pages/ProjectsPage";
import SlidesPage from "./Pages/SlidesPage";
import HomePage from "./Pages/HomePage";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/slides",
    element: <SlidesPage />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
