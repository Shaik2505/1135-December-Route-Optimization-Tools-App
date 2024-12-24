import React, { useState } from "react";

const SavedRoutes = () => {
  const [savedRoutes, setSavedRoutes] = useState([
    {
      id: 1,
      name: "Home to Office",
      pickup: "123 Main St",
      destination: "456 Elm St",
    },
    {
      id: 2,
      name: "Grocery Run",
      pickup: "789 Oak St",
      destination: "Market Square",
    },
    {
      id: 3,
      name: "Weekend Trip",
      pickup: "City Center",
      destination: "Beachside Resort",
    },
  ]);
  const [newRoute, setNewRoute] = useState({
    name: "",
    pickup: "",
    destination: "",
  });
  const [editingRoute, setEditingRoute] = useState(null); // For editing an existing route
  const [isModalOpen, setIsModalOpen] = useState(false); // For opening the modal
  const [isEditModal, setIsEditModal] = useState(false); // To distinguish between adding and editing

  // Function to add a new route
  const handleAddRoute = () => {
    if (newRoute.name && newRoute.pickup && newRoute.destination) {
      setSavedRoutes([
        ...savedRoutes,
        { ...newRoute, id: savedRoutes.length + 1 },
      ]);
      setNewRoute({ name: "", pickup: "", destination: "" }); // Reset form
      setIsModalOpen(false); // Close the modal after adding the route
    }
  };

  // Function to start editing an existing route
  const handleEditRoute = (route) => {
    setEditingRoute(route); // Set the route to edit
    setIsEditModal(true); // Open the edit modal
    setIsModalOpen(true); // Open modal
  };

  // Function to save the edited route
  const handleSaveEdit = () => {
    setSavedRoutes(
      savedRoutes.map((route) =>
        route.id === editingRoute.id ? editingRoute : route
      )
    );
    setIsModalOpen(false); // Close the modal after saving the changes
    setEditingRoute(null); // Reset editing state
    setIsEditModal(false); // Reset edit modal state
  };

  // Function to delete a route
  const handleDeleteRoute = (id) => {
    setSavedRoutes(savedRoutes.filter((route) => route.id !== id));
  };

  return (
    <div className="flex flex-col mb-4 dark:text-background">
      <label className="text-sm font-bold mb-2">Saved Routes:</label>

      {/* Displaying routes */}
      <ul>
        {savedRoutes.map((route) => (
          <li key={route.id} className="mb-2">
            <div className="flex justify-between items-center p-2 border border-gray-300 rounded-lg">
              <div>
                <h4 className="font-bold">{route.name}</h4>
                <p className="text-sm">Pickup: {route.pickup}</p>
                <p className="text-sm">Destination: {route.destination}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => handleEditRoute(route)} // Open edit modal
                >
                  Edit
                </button>
                <button
                  className="text-green-500 hover:text-green-700"
                  onClick={() => alert(`Using route: ${route.name}`)}
                >
                  Use
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDeleteRoute(route.id)} // Delete route
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Button to trigger Add Route modal */}
      <button
        className="text-white bg-orange-400 hover:bg-orange-300 duration-300 p-2 rounded mt-4"
        onClick={() => {
          setIsModalOpen(true);
          setIsEditModal(false); // Set modal to add mode
        }}
      >
        Add Route
      </button>

      {/* Modal for adding or editing route */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="font-bold text-lg mb-4">
              {isEditModal ? "Edit Route" : "Add New Route"}
            </h2>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Route Name"
                value={isEditModal ? editingRoute.name : newRoute.name}
                onChange={(e) =>
                  isEditModal
                    ? setEditingRoute({ ...editingRoute, name: e.target.value })
                    : setNewRoute({ ...newRoute, name: e.target.value })
                }
                className="p-2 border border-gray-300 rounded w-full"
              />
              <input
                type="text"
                placeholder="Pickup Location"
                value={isEditModal ? editingRoute.pickup : newRoute.pickup}
                onChange={(e) =>
                  isEditModal
                    ? setEditingRoute({
                        ...editingRoute,
                        pickup: e.target.value,
                      })
                    : setNewRoute({ ...newRoute, pickup: e.target.value })
                }
                className="p-2 border border-gray-300 rounded w-full"
              />
              <input
                type="text"
                placeholder="Destination"
                value={
                  isEditModal ? editingRoute.destination : newRoute.destination
                }
                onChange={(e) =>
                  isEditModal
                    ? setEditingRoute({
                        ...editingRoute,
                        destination: e.target.value,
                      })
                    : setNewRoute({ ...newRoute, destination: e.target.value })
                }
                className="p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                className="text-white bg-green-500 hover:bg-green-700 p-2 rounded"
                onClick={isEditModal ? handleSaveEdit : handleAddRoute}
              >
                {isEditModal ? "Save Changes" : "Save Route"}
              </button>
              <button
                className="text-white bg-gray-500 hover:bg-gray-700 p-2 rounded"
                onClick={() => setIsModalOpen(false)} // Close modal without saving
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedRoutes;
