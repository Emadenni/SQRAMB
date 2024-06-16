import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/Landing-page/LandingPage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/test",
    element: <App />,
  },
]);
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<RouterProvider router={router} />);
} else {
  console.error("Root element not found");
}