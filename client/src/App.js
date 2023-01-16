import "./App.css";
import LandingPage from "./components/LandingPage";
import data from "./data/data.json";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import SignUpIn from "./components/Auth/loginsignup";
import { useEffect, useState, useCallback } from "react";
import { AuthContext } from "./contexts/authcontext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setuserId] = useState("");
  const login = useCallback((uid) => {
    localStorage.setItem("token", uid);
    setIsLoggedIn(true);
    setuserId(localStorage.getItem("token"));
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setuserId(null);
    localStorage.removeItem("token");
  }, []);

  useEffect(() => {
    if (localStorage.hasOwnProperty("token")) {
      setuserId(localStorage.getItem("token"));
      setIsLoggedIn(true);
    }
  }, []);
  let routes;

  if (!isLoggedIn) {
    routes = (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/account" />} />
          <Route element={<SignUpIn />} path="/account" />
          <Route path="*" element={<Navigate to="/" />} />
          {/* <Route element={<LandingPage data={data} />} path="/home" /> */}
        </Routes>
      </BrowserRouter>
    );
  } else {
    routes = (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          {/* <Route element={<SignUpIn />} path="/account" /> */}
          <Route element={<LandingPage data={data} />} path="/home" />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    );
  }
  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <main>{routes}</main>
      </AuthContext.Provider>
    </>
  );
}

export default App;
