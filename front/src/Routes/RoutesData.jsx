import ChangePassword from "pages/ChangePassword/Index";
import Dashboard from "pages/Dashboard/Index";
import Login from "pages/Login/Index";
import ResetPassword from "pages/ResetPassword/Index";
import CreateRole from "pages/RoleList/CreateRole";
import Roles from "pages/RoleList/Index";
import Setting from "pages/Setting/Index";
import LoggerList from "pages/LoggerList/Index";
import ErrorPage from "pages/ErrorPage/Index";
import PasswordResetForm from "pages/ResetPassword/Index";

export const routesData = [
  // Authenticate require as per need

  {
    name: "dashboard",
    path: "/",
    element: <Dashboard />,
  },
  {
    name: "logger",
    path: "/logger",
    element: <LoggerList />,
  },
  {
    name: "changePassword",
    path: "/changePassword",
    element: <ChangePassword />,
  },
  {
    name: "roles",
    path: "/roles",
    element: <Roles />,
  },
  {
    name: "create role",
    path: "/roles/create",
    element: <CreateRole />,
  },
  {
    name: "setting",
    path: "/setting",
    element: <Setting />,
  },
  {
    name: "404",
    path: "*",
    element: <ErrorPage />,
  },

  //   ... as per need
];

export const openRoute = [
  {
    name: "login",
    path: "/login",
    element: <Login />,
  },
  {
    name: "resetPassword",
    path: "/resetPassword",
    element: <ResetPassword />,
  },

  {
    name: "passwordReset",
    path: "/password/reset",
    element: <PasswordResetForm />,
  },
];
