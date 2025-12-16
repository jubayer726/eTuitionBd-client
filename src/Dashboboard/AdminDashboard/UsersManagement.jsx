import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const UsersManagement = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
      return res.data;
    },
  });

  const { data: alltuitions = []} = useQuery({
    queryKey: ["tuitions"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/available-tuitions`);
      return res.data;
    },
  });
  const { data: tutors = []} = useQuery({
    queryKey: ["tutors"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/available-tutors`);
      return res.data;
    },
  });

  const { data: payments = []} = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/orders`);
      return res.data;
    },
  });


  const handleRoleChange = async (id, role) => {
    await axios.patch(`${import.meta.env.VITE_API_URL}/users/${id}`, { role });
    const confirm = window.confirm(
      "Are you sure you want to change the Role?"
    );
    if (!confirm) return;
    toast.success("Role updated");
    refetch();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/users/${id}`);
    toast.success("User deleted");
    refetch();
  };
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-xl">Total Students</h3>
          <p className="text-3xl font-bold text-indigo-600 mt-3">{alltuitions.length}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-xl">Total Tutors</h3>
          <p className="text-3xl font-bold text-green-600 mt-3">{tutors.length}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-xl">Active Tuitions</h3>
          <p className="text-3xl font-bold text-yellow-600 mt-3">{tutors.length}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-xl">Total successfully payment</h3>
          <p className="text-3xl font-bold text-yellow-600 mt-3">{payments.length}</p>
        </div>

      </div>

      <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>
                  <img
                    src={user.photoURL}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td>{user.displayName}</td>
                <td>{user.email}</td>

                <td>
                  <select
                    value={user.role}
                    onChange={(e) =>
                      handleRoleChange(user._id, e.target.value)
                    }
                    className="btn select select-bordered select-sm"
                  >
                    <option value="student">Student</option>
                    <option value="tutor">Tutor</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>

                <td>
                    {/* <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </button> */}

                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default UsersManagement;
