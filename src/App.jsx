import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectsPage from "./Pages/ProjectsPage";
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
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
