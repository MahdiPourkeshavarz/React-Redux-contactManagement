/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

export function ContactItem({ contact }) {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8 flex-col">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <img
          className="w-full h-64 object-cover rounded-md mb-4"
          src={contact.imgUrl}
          alt={contact.fullName}
        />
        <h2 className="text-2xl font-bold mb-2">{contact.fullName}</h2>
        <p className="text-lg mb-1">
          <strong>Mobile:</strong> {contact.mobileNumber}
        </p>
        <p className="text-lg mb-1">
          <strong>Email:</strong> {contact.emailAddress}
        </p>
        <p className="text-lg">
          <strong>Job:</strong> {contact.job}
        </p>
      </div>
      <NavLink
        to="/"
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition mt-16"
      >
        Back to Homepage
      </NavLink>
    </div>
  );
}
