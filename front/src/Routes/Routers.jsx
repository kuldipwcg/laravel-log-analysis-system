import Main from "Layout/Main/Index";
import ErrorPage from "pages/ErrorPage/Index";
import { Route, Routes } from "react-router-dom";
import { openRoute, routesData } from "./RoutesData";

const Routers = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route element={<Main />}>
        {routesData?.map((route, key) => {
          return (
            <Route key={key} path={route?.path} element={route?.element} />
          );
        })}
      </Route>
      <Route>
        {openRoute?.map((route, key) => {
          return (
            <Route key={key} path={route?.path} element={route?.element} />
          );
        })}
      </Route>
    </Routes>
  );
};

export default Routers;
