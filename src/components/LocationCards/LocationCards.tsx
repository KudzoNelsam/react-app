import React from "react";
import LocationCard from "../LocationCard/LocationCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface LocationCardsProps {}

function LocationCards({}: LocationCardsProps) {
  const locations = [
    {
      city: "Paris",
      country: "France",
      gpsCount: 45,
      flagUrl: "https://flagcdn.com/w40/fr.png",
    },
    {
      city: "Londres",
      country: "Royaume-Uni",
      gpsCount: 30,
      flagUrl: "https://flagcdn.com/w40/gb.png",
    },
    {
      city: "Berlin",
      country: "Allemagne",
      gpsCount: 25,
      flagUrl: "https://flagcdn.com/w40/de.png",
    },
    {
      city: "Madrid",
      country: "Espagne",
      gpsCount: 20,
      flagUrl: "https://flagcdn.com/w40/es.png",
    },
    {
      city: "Rome",
      country: "Italie",
      gpsCount: 15,
      flagUrl: "https://flagcdn.com/w40/it.png",
    },
    {
      city: "Amsterdam",
      country: "Pays-Bas",
      gpsCount: 10,
      flagUrl: "https://flagcdn.com/w40/nl.png",
    },
  ];
  return (
    <>
      <div className="w-7/10 mx-auto mt-12">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-bold">Destinations populaires</h2>
            <p className="mb-5">
              Les routes les plus demandées par nos utilisateurs
            </p>
          </div>

          <Link
            to={{ pathname: "destinations" }}
            className="p-2 rounded-lg h-max border-gray-400 flex text-sm space-x-4 items-center border w-max"
          >
            <span>Voir tout</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-6 gap-2 mb-6 pb-10">
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              city={location.city}
              country={location.country}
              gpsCount={location.gpsCount}
              flagUrl={location.flagUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default LocationCards;
