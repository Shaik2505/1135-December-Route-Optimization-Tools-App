import React from "react";
import { FaExclamationTriangle, FaTrafficLight, FaRoad } from "react-icons/fa";

const mapHighlights = [
  {
    id: 1,
    name: "Accidents",
    icon: <FaExclamationTriangle />,
    onClick: "markAccident",
  },
  {
    id: 2,
    name: "Congestion",
    icon: <FaTrafficLight />,
    onClick: "markCongestion",
  },
  {
    id: 3,
    name: "Road Closures",
    icon: <FaRoad />,
    onClick: "markRoadClosure",
  },
];

const MapHighlights = ({ markAccident, markCongestion, markRoadClosure }) => {
  const handleClick = (onClick) => {
    switch (onClick) {
      case "markAccident":
        markAccident();
        break;
      case "markCongestion":
        markCongestion();
        break;
      case "markRoadClosure":
        markRoadClosure();
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="text-sm font-bold mb-2">Map Highlights:</label>
      <div className="flex space-x-4">
        {mapHighlights.map((highlight) => (
          <button
            key={highlight.id}
            onClick={() => handleClick(highlight.onClick)}
            className="p-4 rounded-lg bg-orange-400 text-gray-700 flex flex-col items-center hover:bg-orange-300 duration-300"
          >
            {highlight.icon}
            <span className="mt-2 text-sm">{highlight.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MapHighlights;
