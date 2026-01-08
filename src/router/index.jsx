import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Destinations from "../pages/Destinations";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Search from "../pages/Search";

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
