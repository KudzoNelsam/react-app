import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";

export interface NavBarProps {}

function NavBar({}: NavBarProps) {
  return (
    <nav className="font-inter sticky bg-white z-50 top-0 fond-bold border-b border-gray-300/70 flex justify-around items-center p-4">
      <Logo></Logo>
      <Menu></Menu>
    </nav>
  );
}

export default NavBar;
