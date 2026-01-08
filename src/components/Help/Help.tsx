import React from "react";

export interface HelpProps {}

function Help({}: HelpProps) {
  return (
    <>
      <div className="">
        <h2 className="font-bold text-2xl mb-4 text-center">
          Comment ça marche ?
        </h2>
        <p className="text-gray-400 text-center text-md">
          Une plateforme simple et sécurisée pour tous vos envois internationaux
        </p>
      </div>
    </>
  );
}

export default Help;
