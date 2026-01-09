import { Box, LucideIcon } from "lucide-react";

export interface HelpCardProps {
  icon?: LucideIcon;
  title?: string;
  description?: string;
}

function HelpCard({ icon: Icon, title, description }: HelpCardProps) {
  return (
    <>
      <div className="text-center h-60 flex flex-col justify-center items-center p-4 border bg-white  border-gray-200 rounded-xl shadow-sm">
        <div className="bg-blue-100 p-6 rounded-xl text-blue-800">
          {Icon ? <Icon size={25} /> : <Box size={25} />}{" "}
        </div>
        <h3 className="font-medium text-md mt-2 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </>
  );
}

export default HelpCard;
