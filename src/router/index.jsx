import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/MainLayout";
import Home from "../pages/Home";

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
