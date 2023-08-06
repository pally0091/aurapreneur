import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Components/Main";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Deposite from "./Components/Deposite";
import Withdraw from "./Components/Withdraw";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/deposite",
          element: (
            <PrivateRoute>
              <Deposite></Deposite>
            </PrivateRoute>
          ),
        },
        {
          path: "/withdraw",
          element: (
            <PrivateRoute>
              <Withdraw></Withdraw>
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
