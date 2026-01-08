import { ArrowRight, Plane } from "lucide-react";
import { Link } from "react-router-dom";

export interface LiensProps {}

function Liens({}: LiensProps) {
  return (
    <>
      <div className="font-inter flex justify-center pt-8 space-x-4">
        <Link
          to={{ pathname: "search" }}
          className="p-2 rounded-lg flex text-sm space-x-4 text-gray-600 items-center border w-max border-gray-300"
        >
          <span>Chercher un GP</span>
          <ArrowRight size={15} />
        </Link>

        <Link
          to={{ pathname: "register" }}
          className="p-2 rounded-lg flex text-sm space-x-4 text-white bg-blue-500 items-center border w-max border-blue-400"
        >
          <span>Devenir GP</span>
          <Plane size={15} />
        </Link>
      </div>
    </>
  );
}

export default Liens;
