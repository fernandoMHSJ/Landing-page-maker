import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios

const UserList = () => {
  const [users, setUsers] = useState([]); // State to store the user list.
  const [loading, setLoading] = useState(true); // State for loading status.
  const [error, setError] = useState(null); // State for error handling.
  const [searchTerm, setSearchTerm] = useState(""); // State for search input.

  useEffect(() => {
    // Fetch data using axios
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        setUsers(response.data.data); // Assuming 'data.data' contains the user list.
        setLoading(false); // Set loading to false.
      })
      .catch((err) => {
        setError(err.message); // Catch and set any errors.
        setLoading(false);
      });
  }, []);

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Loading state
  if (loading) return <div className="p-6 text-center">Loading...</div>;

  // Error state
  if (error) return <div className="text-center text-red-500">{`Error: ${error}`}</div>;

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-extrabold text-center text-gray-800">
        User List
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full max-w-md px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="w-full max-w-4xl mx-auto text-left text-gray-500 border-collapse border-gray-200 text-medium">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-4 py-2 border-b">Avatar</th>
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">First Name</th>
              <th className="px-4 py-2 border-b">Last Name</th>
              <th className="px-4 py-2 border-b">Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="transition duration-300 ease-in-out border-b hover:bg-gray-100"
                >
                  <td className="px-4 py-2">
                    <img
                      src={user.avatar}
                      alt={`${user.first_name} ${user.last_name}`}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2">{user.id}</td>
                  <td className="px-4 py-2">{user.first_name}</td>
                  <td className="px-4 py-2">{user.last_name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="px-4 py-2 text-center text-gray-600 bg-gray-50"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
