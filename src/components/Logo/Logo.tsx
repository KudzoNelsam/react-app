import { Ship } from "lucide-react";
import { Link } from "react-router-dom";
export interface LogoProps {}

function Logo({}: LogoProps) {
  const title = "shipeasy";

  return (
    <Link
      to={{ pathname: "/" }}
      className="flex items-center font-medium space-x-2"
    >
      <span className="bg-blue-700 p-2 rounded-lg text-white">
        <Ship />
      </span>
      <h1 className="text-2xl uppercase ">{title}</h1>
    </Link>
  );
}

export default Logo;
