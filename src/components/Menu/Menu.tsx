export interface MenuProps {}

function Menu({}: MenuProps) {
  return (
    <menu>
      <ul className="flex items-center space-x-6 text-sm font-medium">
        <a href="" className="text-gray-600">
          <li>Rechercher un GP</li>
        </a>
        <a href="" className="text-gray-600">
          <li>Destinations</li>
        </a>
        <a href="" className="">
          <li>Connexion</li>
        </a>
        <a href="" className="p-2 px-3 bg-gray-500 rounded-lg text-white">
          <li>Créer un compte GP</li>
        </a>
      </ul>
    </menu>
  );
}

export default Menu;
