import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./App";
import UserPage from "./views/apps/user/UserPage";

function AdminRoutes() {
  const { auth } = useContext(AuthContext);
  return (
    <>
      {auth?.role_id === 0 ? (
        <Routes>
          <Route path="/app_user_page" element={<UserPage />} />
        </Routes>
      ) : null}
    </>
  );
}

export default AdminRoutes;
