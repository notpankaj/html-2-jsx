import React, { useEffect } from "react";
import "./App.css";
import Dashboard from "./views/Dashboard";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./views/Home";
import Chat from "./views/apps/Chat";
import Login from "./views/auth/Login";
import UserProfile from "./views/UserProfile";
import UserAccountSetting from "./views/apps/UserAccountSetting";
import Analytics from "./views/Analytics";
import { useState } from "react/cjs/react.development";
import UserPage from "./views/apps/user/UserPage";
import Login2 from "./views/auth/Login2";
import Register2 from "./views/auth/Register2";
import AdminRoutes from "./AdminRoutes";

export const AuthContext = React.createContext();
function App() {
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate(null);

  console.log("AUTH", auth);

  const checkIfAlreadyLoggedIn = () => {
    const localUserData = localStorage.getItem("auth");

    if (localUserData) {
      setAuth(JSON.parse(localUserData));
      navigate("/");
    }
  };

  useEffect(() => {
    checkIfAlreadyLoggedIn();
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth }}>
        {!auth ? (
          <Routes>
            <Route path="/*" element={<Navigate replace to="/auth_login" />} />
            {/* <Route path="/auth_login" element={<Login />} /> */}
            <Route path="/auth_login" element={<Login2 />} />
            <Route path="/auth_register" element={<Register2 />} />
          </Routes>
        ) : (
          <>
            <Dashboard>
              <Routes>
                <Route
                  path="/auth_login"
                  element={<Navigate replace to="/" />}
                />
                <Route path="/" element={<Home />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/apps_chat" element={<Chat />} />
                <Route path="/user_profile" element={<UserProfile />} />
                <Route
                  path="/user_account_setting"
                  element={<UserAccountSetting />}
                />
              </Routes>
              <AdminRoutes />
            </Dashboard>
          </>
        )}
      </AuthContext.Provider>
    </>
  );
}

export default App;
