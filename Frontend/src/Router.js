import {
    createBrowserRouter,
  } from "react-router-dom";

import App from './App'
import Dashboard from './pages/Dash/Dashboard'
import Home from "./pages/Dash/dashHome/Home";
import UesrList from "./pages/Dash/userList/UesrList";
import Login from "./pages/login/Login";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"/dashboard/manageUsers",
          element:<UesrList/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

export default Router