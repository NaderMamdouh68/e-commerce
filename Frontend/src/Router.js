import { Edit } from "@mui/icons-material";
import {
    createBrowserRouter,
  } from "react-router-dom";

import App from './App'
import Createuser from "./pages/Dash/createuser/Createuser";
import Dashboard from './pages/Dash/Dashboard'
import Home from "./pages/Dash/dashHome/Home";
import Edituser from "./pages/Dash/edituser/Edituser";
import Readuser from "./pages/Dash/read/Readuser";
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
          element:<UesrList/>,  
        },
        {
          path:"/dashboard/manageUsers/edituser",
          element:<Edituser/>,  
        },
        {
          path:"/dashboard/manageUsers/createu",
          element:<Createuser/>,  
        },
        {
          path:"/dashboard/manageUsers/readu",
          element:<Readuser/>,  
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

export default Router