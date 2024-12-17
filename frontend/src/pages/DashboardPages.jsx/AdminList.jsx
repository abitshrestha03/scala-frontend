import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import default styles for Toastify
import axios from "axios";

const AdminTable = ({ refresh }) => {
  const [admins, setAdmins] = useState([]); // Admin list state
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [adminToDelete, setAdminToDelete] = useState(null);

  const fetchAdmins = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/admin/getAllAdmins",
        { withCredentials: true }
      );
      setAdmins(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching admins:", error);
      toast.error("Error fetching admin users");
    }
  };

  const handleDeleteConfirm = (admin) => {
    setAdminToDelete(admin);
    setShowDeleteConfirm(true);
  };

  const handleDelete = async () => {
    if (!adminToDelete) return;

    try {
      await axios.delete(
        `http://localhost:8000/api/v1/admin/delete-admin/${adminToDelete.username}`,
        { withCredentials: true }
      );
      toast.success("Admin user deleted successfully!");
      setShowDeleteConfirm(false);
      setAdminToDelete(null);
      fetchAdmins();
    } catch (error) {
      toast.error("Error deleting admin user");
      console.error("Error deleting admin user:", error);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, [refresh]);

  return (
    <div className="p-4 text-sm">
      {/* Admin Users Table */}
      <div className="bg-white shadow-md rounded-lg">
        <table className="min-w-full bg-white text-sm">
          <thead className="border-gray-300 text-sm">
            <tr>
              <th className="py-3 px-4 text-left">S.N.</th>
              <th className="py-3 px-4 text-left">Username</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {admins.map((admin, index) => (
              <tr key={admin.id} className="border-b">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{admin.username}</td>
                <td className="py-3 px-4">{admin.email}</td>
                <td className="py-3 px-4">
                  {/* Display role with conditional background color */}
                  <span
                    className={`px-2 py-1 rounded-sm text-xs text-white font-medium ${
                      admin.role === "SUPERADMIN"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {admin.role}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2 items-center">
                    <button
                      className="px-3 py-1 rounded-sm text-xs font-medium text-center bg-red-500 text-white"
                      onClick={() => handleDeleteConfirm(admin)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
            <p className="mb-4">
              Are you sure you want to delete this admin user?
            </p>
            <div className="flex space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => {
                  setShowDeleteConfirm(false);
                  setAdminToDelete(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

AdminTable.propTypes = {
  refresh: PropTypes.bool.isRequired,
};

export default AdminTable;
