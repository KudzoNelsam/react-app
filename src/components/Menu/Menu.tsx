import { Link } from "react-router-dom";

export interface MenuProps {}

function Menu({}: MenuProps) {
  return (
    <menu>
      <ul className="flex items-center space-x-6 text-sm font-medium">
        <Link to={{ pathname: "search" }} className="text-gray-600">
          <li>Rechercher un GP</li>
        </Link>
        <Link to={{ pathname: "destinations" }} className="text-gray-600">
          <li>Destinations</li>
        </Link>
        <Link
          to={{ pathname: "login" }}
          className="p-2 px-3 hover:bg-blue-500 transition-colors duration-100 rounded-lg hover:text-white text-blue-500"
        >
          <li>Connexion</li>
        </Link>
        <Link
          to={{ pathname: "register" }}
          className="p-2 px-3 bg-blue-500 hover:bg-blue-600 transition-colors duration-100 rounded-lg text-white"
        >
          <li>Créer un compte GP</li>
        </Link>
      </ul>
    </menu>
  );
}

export default Menu;
