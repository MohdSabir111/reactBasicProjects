
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout"
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/dashboard",
        element: 
            <Dashboard/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <h1>PAGE NOT FOUND </h1> ,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
