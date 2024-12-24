import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Body from "./components/Body";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoutes";
import { useState, useEffect } from "react";
import UserProfile from "./pages/UserProfile";
import Help from "./components/Help";
import RoutePage from "./pages/RoutePage";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/body"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Body />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="route" element={<RoutePage />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="help" element={<Help />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
