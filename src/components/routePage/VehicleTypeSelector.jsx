import React from "react";
import { FaCar, FaTruck, FaMotorcycle, FaUser, FaBus } from "react-icons/fa";

const vehicleTypes = [
  { id: 1, name: "Car", icon: <FaCar /> },
  { id: 2, name: "Truck", icon: <FaTruck /> },
  { id: 3, name: "Motorcycle", icon: <FaMotorcycle /> },
  { id: 4, name: "Human", icon: <FaUser /> }, // Added Human icon
  { id: 5, name: "Bus", icon: <FaBus /> }, // Added Bus icon
];

const VehicleTypeSelector = ({ vehicleType, setVehicleType }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-lg font-semibold mb-2 text-gray-700 dark:text-background">
        Select Vehicle Type:
      </label>
      <div className="flex flex-wrap justify-start gap-4">
        {vehicleTypes.map((type) => (
          <div
            key={type.id}
            onClick={() => setVehicleType(type.id)}
            className={`p-6 rounded-lg cursor-pointer border-2 transition-transform transform hover:scale-105 ${
              vehicleType === type.id
                ? "bg-orange-400 text-white border-orange-200"
                : "bg-gray-100 text-gray-700 border-gray-300"
            }`}
          >
            <div className="flex flex-col items-center">
              <div className="text-3xl">{type.icon}</div>
              <span className="mt-2 text-sm font-medium">{type.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleTypeSelector;
