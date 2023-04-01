import {
    createBrowserRouter,
  } from "react-router-dom";

import App from './App'
import Createuser from "./pages/Dash/createuser/Createuser";
import Dashboard from './pages/Dash/Dashboard'
import Home from "./pages/Dash/dashHome/Home";
import Edituser from "./pages/Dash/Edit/Edituser";
import Editproduct from "./pages/Dash/Edit/Editproduct";
import Readuser from "./pages/Dash/read/Readuser";
import Readproduct from "./pages/Dash/read/Readproduct";
import Readcategory from "./pages/Dash/read/Readcategory";
import CategoryList from "./pages/Dash/List/CategoryList";
import ProductList from "./pages/Dash/List/ProductList";
import UesrList from "./pages/Dash/List/UesrList";
import Login from "./pages/login/Login";
import Editcategory from "./pages/Dash/Edit/Editcategory";

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
          path:"/dashboard/manageProducts",
          element:<ProductList/>,  
        },
        {
          path:"/dashboard/manageCategories",
          element:<CategoryList/>,  
        },
        {
          path:"/dashboard/manageUsers/edituser/:id",
          element:<Edituser/>,  
        },
        {
          path:"/dashboard/manageProducts/editproduct/:id",
          element:<Editproduct />,  
        },
        {
          path:"/dashboard/manageProducts/editcategory/:id",
          element:<Editcategory />,  
        },
        {
          path:"/dashboard/manageUsers/createu",
          element:<Createuser/>,  
        },
        {
          path:"/dashboard/manageUsers/readu/:id",
          element:<Readuser/>,  
        },
        {
          path:"/dashboard/manageUsers/readp/:id",
          element:<Readproduct/>,  
        },
        {
          path:"/dashboard/manageUsers/readc/:id",
          element:<Readcategory/>,  
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

export default Router