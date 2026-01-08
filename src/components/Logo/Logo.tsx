import { Ship } from "lucide-react";
export interface LogoProps {}

function Logo({}: LogoProps) {
  const title = "shipeasy";

  return (
    <a href="" className="flex items-center font-medium space-x-2">
      <Ship />
      <h1 className="text-2xl uppercase ">{title}</h1>
    </a>
  );
}

export default Logo;
