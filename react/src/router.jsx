import {createBrowserRouter, Navigate} from "react-router-dom";
import Dashboard from "./views/Dashboard.jsx";
import Users from "./views/Users.jsx";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Settings from "./views/Settings.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import Clients from "./views/Clients.jsx";
import FormPayment from "./views/FormPayment.jsx";
import PricingPage from "./views/PricingPage.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Navigate to="/" />
      },
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/users',
        element: <Users />
      },
      {
        path: '/clients',
        element: <Clients />
      },
      {
        path: '/settings',
        element: <Settings />
      },
      {
        path: '/payment',
        element: <FormPayment />
      }
    ],
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },

    ]
  },
  {
    path: '/pricing',
    element: <PricingPage />
  }


])

export default router;
