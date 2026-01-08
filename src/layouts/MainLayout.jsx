import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
