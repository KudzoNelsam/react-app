import HelpCard from "../HelpCard/HelpCard";
import { IdCard, MessageSquare, Package, Shield } from "lucide-react";

export interface HelpProps {}

function Help({}: HelpProps) {
  const helpers = [
    {
      icon: Package,
      title: "Rechercher un GP",
      description: "Trouvez un GP selon votre destination et date d'envoi",
    },
    {
      icon: IdCard,
      title: "Achetez un PASS",
      description: "Obtenez un PASS pour contacter les transporteurs",
    },
    {
      icon: MessageSquare,
      title: "Contactez",
      description: "Échangez directement avec le GP via notre messagerie",
    },
    {
      icon: Shield,
      title: "Envoyez",
      description: "Confiez votre colis en toute sérénité",
    },
  ];
  return (
    <>
      <div className="">
        <h2 className="font-bold text-2xl mb-4 text-center">
          Comment ça marche ?
        </h2>
        <p className="text-gray-400 text-center text-md">
          Une plateforme simple et sécurisée pour tous vos envois internationaux
        </p>
        <div className="grid grid-cols-4 gap-6 w-7/10 mx-auto mt-8">
          {helpers.map((helper, index) => (
            <HelpCard
              key={index}
              icon={helper.icon}
              title={index + 1 + ". " + helper.title}
              description={helper.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Help;
