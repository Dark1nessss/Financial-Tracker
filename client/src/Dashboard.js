import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import Layout from "./components/layout/Layout"; // Change here layout, create a new layout
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import AdminPage from "./pages/AdminPage";
import ErrorPage403 from "./pages/403";
import ErrorPage404 from "./pages/404";
import ErrorPage500 from "./pages/500";


function Dashboard() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/403" element={<ErrorPage403/>}/>
          <Route path="/404" element={<ErrorPage404/>}/>
          <Route path="/500" element={<ErrorPage500/>}/>
          {/* TODO adicionar uma pagina a avisar not-authorized*/}

          {/* Protected routes*/}
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route index element={<DashboardPage />} />
          </Route>

          {/* Admin routes */}
          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default Dashboard;
