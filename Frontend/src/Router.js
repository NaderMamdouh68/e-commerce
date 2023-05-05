import {
  createBrowserRouter,
} from "react-router-dom";

import App from './pages/user/App.jsx'
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
import CreateCategory from "./pages/Dash/create/Createcategory";
import CreateProduct from "./pages/Dash/create/Createproduct";
import OrderList from "./pages/Dash/List/OrderList";
import Editorder from "./pages/Dash/Edit/Editorder";
import Analytics from "./pages/Dash/analysis/Analytics";
import Readorder from "./pages/Dash/read/Readorder";
import FeedbackList from "./pages/Dash/List/FeedbackList";
import Customerhome from "./pages/user/home/Customerhome.jsx";
import Buy from "./pages/user/Buy/Buy";
import Products from "./pages/user/products/Products";
import Profile from "./pages/user/profile/Profile.jsx";
import About from "./pages/user/about/About.jsx";
import Category from "./pages/user/products/Category.jsx";
import RequsetList from "./pages/Dash/List/RequsetList";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Customerhome />
      },
      {
        path: "/buy/:id",
        element: <Buy />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/category/:id",
        element: <Category />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/about",
        element: <About />
      },
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/dashboard/manageUsers",
        element: <UesrList />,
      },
      {
        path: "/dashboard/feedback",
        element: <FeedbackList />,
      },
      {
        path: "/dashboard/analytics",
        element: <Analytics />,
      },
      {
        path: "/dashboard/manageProducts",
        element: <ProductList />,
      },
      {
        path: "/dashboard/manageOrders",
        element: <OrderList />,
      },
      {
        path: "/dashboard/manageRequests",
        element: <RequsetList />,
      },
      {
        path: "/dashboard/manageProducts/:id",
        element: <ProductList />,
      },
      {
        path: "/dashboard/manageCategories",
        element: <CategoryList />,
      },
      {
        path: "/dashboard/manageUsers/edituser/:id",
        element: <Edituser />,
      },
      {
        path: "/dashboard/manageProducts/editproduct/:id",
        element: <Editproduct />,
      },
      {
        path: "/dashboard/manageCategories/editcategory/:id",
        element: <Editcategory />,
      },
      {
        path: "/dashboard/manageorder/editorder/:id",
        element: <Editorder />,
      },
      {
        path: "/dashboard/manageCategories/createCategory",
        element: <CreateCategory />,
      },
      {
        path: "/dashboard/manageProducts/createProduct",
        element: <CreateProduct />,
      },
      {
        path: "/dashboard/manageUsers/readu/:id",
        element: <Readuser />,
      },
      {
        path: "/dashboard/manageProducts/readp/:id",
        element: <Readproduct />,
      },
      {
        path: "/dashboard/manageCategories/readc/:id",
        element: <Readcategory />,
      },
      {
        path: "/dashboard/manageorder/reado/:id",
        element: <Readorder />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default Router

