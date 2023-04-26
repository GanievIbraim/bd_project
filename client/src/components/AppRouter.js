import { Routes, Route } from "react-router-dom";
import { Admin } from "../pages/Admin";
import { Auth } from "../pages/Auth";
import { FoodPage } from "../pages/FoodPage";
import { Notfoundpage } from "../pages/Notfoundpage";
import { Order } from "../pages/Order";
import { Service } from "../pages/Service";
import { RequireAuth } from "../hoc/RequireAuth";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="admin"
        element={
          <RequireAuth>
            <Admin />
          </RequireAuth>
        }
      />

      <Route
        path="order"
        element={
          <RequireAuth>
            <Order />
          </RequireAuth>
        }
      />

      <Route path="login" element={<Auth />} />
      <Route path="registration" element={<Auth />} />
      <Route path="food/:id" element={<FoodPage />} />
      <Route path="/service" element={<Service />} />
      <Route path="*" element={<Notfoundpage />} />
    </Routes>
  );
};

export default AppRouter;
