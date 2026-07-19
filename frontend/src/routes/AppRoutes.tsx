import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}