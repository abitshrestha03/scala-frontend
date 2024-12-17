import axios from "axios";
import { useState } from "react";
import AdminTable from "./AdminList";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const CreateAdmin = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your API endpoint
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/admin/create-admin`,
        formData, // The request payload
        {
          headers: { "Content-Type": "application/json" }, // Headers
          withCredentials: true, // To include cookies
        }
      );
      if (response.status===200) {
        alert("Admin created successfully!");
        setFormData({ name: "", email: "", password: "" });
      } else {
        alert("Failed to create admin.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    }
  };

  return (
    <div className="mt-16 max-w-2xl">
    <h2 className="font-bold text-2xl">Create Admin</h2> 
    <form
      className="grid grid-cols-1 md:grid-cols-1 gap-4 px-6 py-6 overflow-y-auto flex-grow border border-gray-300 rounded-lg bg-white shadow-md mt-2"
      onSubmit={handleSubmit}
    >
      <div className="space-y-2 flex flex-col">
        <label htmlFor="edit-role" className="font-semibold text-xs">
          Username
        </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md text-xs"
          placeholder="Enter username . . ."
        />
      </div>
      <div className="space-y-2 flex flex-col">
        <label htmlFor="email" className="font-semibold text-xs">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md text-xs"
          placeholder="Enter username . . ."
        />
      </div>
      <div className="space-y-2 flex flex-col">
        <label htmlFor="password" className="font-semibold text-xs">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md text-xs"
          placeholder="Enter username . . ."
        />
      </div>
      <button
        type="submit"
        className="bg-navblue text-xs text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Create Admin
      </button>
    </form>
    <AdminTable/>
    </div>
  );
};

export default CreateAdmin;
