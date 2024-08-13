import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Landing from "./pages/Home";
import Dashboard from "./pages/Contact";
import About from "./pages/About";
import Github from "./pages/Github";
import Contact from "./pages/Contact";
import { Heading1 } from "lucide-react";

const User = () => {
  const { userId } = useParams(); 
  return (
  <>
   <h1 className="text-center" >User ID: {userId}</h1>
  </>
  )
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/github",
        element: <Github/>,
      },
      {
        path: "/user/:userId",
        element: <User />, // the User component here
      },
      {
        path: "*",
        element: <h1>PAGE NOT FOUND</h1>,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
