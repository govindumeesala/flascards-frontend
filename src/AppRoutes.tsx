import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <DashboardPage />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
