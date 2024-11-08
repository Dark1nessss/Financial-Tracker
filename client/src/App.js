import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Support from "./pages/Support";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Security from "./pages/Security";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import CodeCheck from "./pages/CodeCheck";
import Layout from "./components/layout/Layout";
import Layout2 from "./components/layout/Layout2";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import AdminPage from "./pages/AdminPage";
import ErrorPage403 from "./pages/403";
import ErrorPage404 from "./pages/404";
import ErrorPage500 from "./pages/500";


function App() {
  return (
    <Router>
      <Routes>
        {/* Main layout routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/support" element={<Support />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/security" element={<Security />} />
          <Route path="/about" element={<About />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/code" element={<CodeCheck />} />
        </Route>

        {/* Error layout routes */}
        <Route element={<Layout2 />}>
          <Route path="/403" element={<ErrorPage403 />} />
          <Route path="/404" element={<ErrorPage404 />} />
          <Route path="/500" element={<ErrorPage500 />} />
          
          {/* Dashboard Page */}
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
          </Route>

          {/* Admin Route */}
          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
