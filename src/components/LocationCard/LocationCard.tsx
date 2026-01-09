import React from "react";
import { Link } from "react-router-dom";

export interface LocationCardProps {
  city: string;
  country: string;
  gpsCount: number;
  flagUrl: string;
}

function LocationCard({ city, country, gpsCount, flagUrl }: LocationCardProps) {
  return (
    <Link to={{ pathname: "/search", search: `?destination=${city}` }}>
      <div className=" bg-white rounded-xl border border-gray-200 shadow-sm p-8 flex flex-col items-center text-center">
        {/* Drapeau */}
        <img
          src={flagUrl}
          alt={country}
          className="w-8 h-6 object-cover rounded-sm mb-2"
        />

        {/* Ville */}
        <h3 className="font-semibold text-base text-gray-900">{city}</h3>

        {/* Pays */}
        <p className="text-sm text-gray-500">{country}</p>

        {/* GPS */}
        <p className="text-sm font-medium text-blue-600 mt-1">{gpsCount} GPS</p>
      </div>
    </Link>
  );
}

export default LocationCard;
