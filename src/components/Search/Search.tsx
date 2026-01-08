import { MapPin } from "lucide-react";
import { useState } from "react";

export interface SearchProps {}

function Search({}: SearchProps) {
  const [formQuery, setFormQuery] = useState({
    destination: "",
    date: "",
    villeDepart: "",
  });

  function handleChange(e: any) {
    const { name, value } = e.target;

    setFormQuery({
      ...formQuery,
      [name]: value,
    });
  }

  return (
    <>
      <div className="shadow-md p-2 rounded-xl border border-gray-300 w-1/2 mx-auto bg-white mt-8 flex space-x-6">
        <span className="flex items-center text-gray-500 bg-gray-50 p-1 rounded-lg w-full">
          <MapPin />
          <input
            type="text"
            name="destination"
            value={formQuery.destination}
            onChange={handleChange}
            className="outline-0 border border-gray-100 rounded-lg p-2 w-full"
            placeholder="Destination (Paris, Lyon)"
          />
        </span>

        <span className="flex items-center text-gray-500 bg-gray-50 p-1 rounded-lg w-full">
          <MapPin />
          <input
            type="date"
            name="date"
            value={formQuery.date}
            onChange={handleChange}
            className="outline-0 border border-gray-100 rounded-lg p-2 w-full"
            placeholder="Destination (Paris, Lyon)"
          />
        </span>

        <span className="flex items-center text-gray-500 bg-gray-50 p-1 rounded-lg w-full">
          <MapPin />
          <input
            type="texte"
            name="villeDepart"
            value={formQuery.villeDepart}
            onChange={handleChange}
            className="outline-0 border border-gray-100 rounded-lg p-2 w-full"
            placeholder="Destination (Paris, Lyon)"
          />
        </span>
      </div>
    </>
  );
}

export default Search;
