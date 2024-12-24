import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Sidebar from "../components/routePage/Sidebar";

const RoutePage = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [vehicleType, setVehicleType] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const [route, setRoute] = useState([]); // Coordinates for the route
  const [mapMarkers, setMapMarkers] = useState([]); // Coordinates for the map markers

  useEffect(() => {
    if (pickup && destination) {
      // Mock coordinates for the route; replace with a route API call.
      setRoute([
        [51.505, -0.09], // Mock pickup coordinate
        [51.515, -0.1], // Mock destination
      ]);
    }
  }, [pickup, destination]);

  const handleFocus = () => setShowSidebar(true);

  const handleFindRoute = () => {
    if (pickup && destination) {
      setShowSidebar(false); // Hide the sidebar
    }
  };

  // Function to add markers
  const addMapMarker = (marker) => {
    setMapMarkers((prevMarkers) => [...prevMarkers, marker]);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen pt-16 ">
      {/* Map Section */}
      <div className="flex-1 relative">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          className="w-full h-full z-0"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {route.length > 1 && <Polyline positions={route} color="blue" />}
          {mapMarkers.map((marker, index) => (
            <Marker key={index} position={marker.position}>
              <Popup>{marker.type}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Sidebar Section */}
      {showSidebar && (
        <Sidebar
          pickup={pickup}
          setPickup={setPickup}
          destination={destination}
          setDestination={setDestination}
          vehicleType={vehicleType}
          setVehicleType={setVehicleType}
          toggleSidebar={() => setShowSidebar(false)}
          onFindRoute={handleFindRoute}
          addMapMarker={addMapMarker} // Pass addMapMarker function to Sidebar
        />
      )}

      {/* Initial Input */}
      {!showSidebar && (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-background dark:bg-darkBackground p-3 rounded-lg shadow-md w-2/3 md:w-1/2 pt-14">
          <input
            type="text"
            placeholder="Enter location"
            className="p-3 border rounded-lg w-full focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-500 "
            onFocus={handleFocus} // Show sidebar when focused
          />
        </div>
      )}
    </div>
  );
};

export default RoutePage;
