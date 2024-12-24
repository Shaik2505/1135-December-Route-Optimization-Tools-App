import React, { useEffect, useRef, useState } from "react";
import VehicleTypeSelector from "./VehicleTypeSelector";
import MapHighlights from "./MapHighlights";
import SavedRoutes from "./SavedRoutes";
import { FaBackspace } from "react-icons/fa";

const suggestions = ["Hyderabad", "Secunderabad", "Uppal", "KPHB", "HiTech City"];

const Sidebar = ({
  pickup,
  setPickup,
  destination,
  setDestination,
  vehicleType,
  setVehicleType,
  toggleSidebar,
  onFindRoute,
  addMapMarker, // Receive addMapMarker function from RoutePage
}) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const pickupRef = useRef(null);

  useEffect(() => {
    if (pickupRef.current) {
      pickupRef.current.focus();
    }
  }, []);

  const handlePickupChange = (e) => {
    const value = e.target.value;
    setPickup(value);

    if (value) {
      const matches = suggestions.filter((s) =>
        s.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(matches);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setPickup(suggestion);
    setShowSuggestions(false);
  };

  // Functions to add different types of markers
  const markAccident = () => {
    addMapMarker({ position: [51.51, -0.1], type: 'Accident' });
  };

  const markCongestion = () => {
    addMapMarker({ position: [51.52, -0.11], type: 'Congestion' });
  };

  const markRoadClosure = () => {
    addMapMarker({ position: [51.53, -0.12], type: 'Road Closure' });
  };

  return (
    <div className="w-full md:w-1/3 bg-background dark:bg-darkBackground shadow-lg p-4 overflow-y-auto relative">
      <button
        className="text-orange-400 hover:text-orange-300 mb-4"
        onClick={toggleSidebar}
      >
        <FaBackspace size={30} />
      </button>

      <div className="flex flex-col mb-4 relative">
        <label className="text-sm font-bold mb-2">From:</label>
        <input
          type="text"
          ref={pickupRef}
          value={pickup}
          onChange={handlePickupChange}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-400"
        />
        {showSuggestions && (
          <ul className="absolute left-0 top-full w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg z-10">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-col mb-4">
        <label className="text-sm font-bold mb-2">To:</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-400"
        />
      </div>

      <button
        onClick={onFindRoute}
        className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded-lg mt-2"
      >
        Find Route
      </button>

      <VehicleTypeSelector vehicleType={vehicleType} setVehicleType={setVehicleType} />
      
      <MapHighlights markAccident={markAccident} markCongestion={markCongestion} markRoadClosure={markRoadClosure} /> {/* Pass marker functions to MapHighlights */}
      
      <SavedRoutes />
    </div>
  );
};

export default Sidebar;
