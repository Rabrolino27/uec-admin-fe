/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Events from "components/Events/index.jsx";
// import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";

import SettingsIcon from "@mui/icons-material/Settings";
import Profile from "layouts/profile";
import Test2 from "components/test2";
import Test3 from "components/test3";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";


// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import CategoryIcon from "@mui/icons-material/Category";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Test from "components/test";
import Assets from "components/Asset/Asset";
import BlogDetail from "components/BlogDetail/index"
import About from "components/About/";
import Donations from "components/Donations/Donations";
import Contact from "components/Contact/Contact";
import Testimonies from "components/Testimonies";
import Blogs from "components/Blogs/Blogs";
import Banner from "components/Banner/Banner";

import LiveStreaming from "components/LiveStreaming/LiveStreaming";
import Logout from "layouts/authentication/logout";
import PrivateRoute from "PrivateRoute";

import Login from "Login/";






const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <PrivateRoute> <Dashboard />  </PrivateRoute>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Events",
    key: "events",
    route: "/events",
    icon: <CategoryIcon size="12px" />,
    component:  <PrivateRoute> <Events /> </PrivateRoute>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Testimoies",
    key: "Testimonies",
    route: "/testimonies",
    icon: <Office size="12px" />,
    component: <PrivateRoute> <Testimonies /> </PrivateRoute> ,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Donations",
    key: "Donations",
    route: "/donations",
    icon: <Office size="12px" />,
    component: <PrivateRoute> <Donations /> </PrivateRoute>,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Blogs",
    key: "Blogs",
    route: "/blogs",
    icon: <Office size="12px" />,
    component: <PrivateRoute> <BlogDetail /> </PrivateRoute>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Live Streaming",
    key: "live",
    route: "/live",
    icon: <Office size="12px" />,
    component: <PrivateRoute> <LiveStreaming /> </PrivateRoute>,
    noCollapse: true,
  },
  //{
  //   type: "collapse",
  //   name: " Banner",
  //   key: "banner",
  //   route: "/banner",
  //   icon: <Office size="12px" />,
  //   component: <Banner />,
  //   noCollapse: true,
  // },
  {
    type: "collapse",
    name: " Contact",
    key: "contact",
    route: "/contact",
    icon: <Office size="12px" />,
    component:<PrivateRoute> <Contact /> </PrivateRoute>,
    noCollapse: true,
  },
  {
    type: "",
    name: "BlogDetail",
    key: "BlogDetail",
    route: "/blogdetail",
    icon: <SettingsIcon size="12px" />,
    component: <BlogDetail aid="all" />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Logout",
    key: "logout",
    route: "/authentication/logout",
    icon: <SpaceShip size="12px" />,
    component: <Logout />,
    noCollapse: true,
  },

  // {
  //   type: "collapse",
  //   name: "Donations",
  //   key: "Donations",
  //   route: "/movement",
  //   icon: <AirportShuttleIcon size="12px" />,
  //   component: <Movement aid="all" />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Contact",
  //   key: "Contact",
  //   route: "/disposals",
  //   icon: <DeleteForeverIcon size="12px" />,
  //   component: <Disposal />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Reports",
  //   key: "Companies",
  //   route: "/companies",
  //   icon: <AssessmentIcon size="12px" />,
  //   component: <RTL />,
  //   noCollapse: true,
  // },
  

//   { type: "title", title: "Account Pages", key: "account-pages" },
//   {
//     type: "",
//     name: "Profile",
//     key: "profile",
//     route: "/profile",
//     icon: <CustomerSupport size="12px" />,
//     component: <Profile />,
//     noCollapse: true,
//   },
   {
    type: "",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
//   {
//     type: "",
//     name: "Sign Up",
//     key: "sign-up",
//     route: "/authentication/sign-up",
//     icon: <SpaceShip size="12px" />,
//     component: <SignUp />,
//     noCollapse: true,
//   },
//   {
//     type: "",
//     name: "Test2",
//     key: "Test",
//     route: "/test2",
//     icon: <SpaceShip size="12px" />,
//     component: <Test2 />,
//     noCollapse: true,
//   },
// {
//   type: "",
//   name: "Test3",
//   key: "Test",
//   route: "/test3",
//   icon: <SpaceShip size="12px" />,
//   component: <Test3 />,
//   noCollapse: true,
// },
// {
//   type: "",
//   name: "Table",
//   key: "table",
//   route: "/test4",
//   icon: <SpaceShip size="12px" />,
//   component: <Tables />,
//   noCollapse: true,
// },
//   {
//     type: "",
//     name: "Asset Detail",
//     key: "BlogDetail",
//     route: "/view-asset",
//     icon: <SpaceShip size="12px" />,
//     component: <BlogDetail />,
//     noCollapse: true,
//   },
  
];


export default routes;
