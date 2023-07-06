import Home from "./Home";
import SearchLocation from "./SearchLocation";
import About from "./About";
import Navbar from "./Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/search-location",
          element: <SearchLocation />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
