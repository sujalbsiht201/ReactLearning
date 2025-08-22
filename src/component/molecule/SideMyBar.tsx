import React, { useState } from "react";

export const SideMyBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 m-2 bg-blue-500 text-white rounded-md"
      >
        {open ? "Close" : "Menu"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-5 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-2xl font-bold mb-6">Sidebar Menu</h2>
        <ul className="space-y-4">
          <li className="hover:bg-gray-700 p-2 rounded">Home</li>
          <li className="hover:bg-gray-700 p-2 rounded">About</li>
          <li className="hover:bg-gray-700 p-2 rounded">Services</li>
          <li className="hover:bg-gray-700 p-2 rounded">Contact</li>
        </ul>
      </div>
    </div>
  );
};
