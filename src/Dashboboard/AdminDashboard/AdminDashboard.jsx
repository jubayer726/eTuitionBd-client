const AdminDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-xl">Total Students</h3>
          <p className="text-3xl font-bold text-indigo-600 mt-3">120</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-xl">Total Tutors</h3>
          <p className="text-3xl font-bold text-green-600 mt-3">45</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-xl">Active Tuitions</h3>
          <p className="text-3xl font-bold text-yellow-600 mt-3">30</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-xl">Total Earnings</h3>
          <p className="text-3xl font-bold text-purple-600 mt-3">$3,200</p>
        </div>

      </div>

      {/* Tutor Applications */}
      <div className="bg-white p-6 rounded-xl shadow mb-10">
        <h3 className="text-xl font-bold mb-4">Pending Tutor Applications</h3>

        <ul className="space-y-4">
          <li className="flex justify-between bg-gray-50 p-4 rounded-lg">
            <span>Nusrat Jahan (English Tutor)</span>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Approve</button>
          </li>
          <li className="flex justify-between bg-gray-50 p-4 rounded-lg">
            <span>Sajid Hasan (Chemistry Tutor)</span>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Approve</button>
          </li>
        </ul>
      </div>

      {/* Manage Users */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-bold mb-4">Manage Users</h3>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-3">Name</th>
              <th className="p-3">Role</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-3">Rahim Uddin</td>
              <td className="p-3">Student</td>
              <td className="p-3">
                <button className="text-red-600">Remove</button>
              </td>
            </tr>
            <tr>
              <td className="p-3">Nusrat Jahan</td>
              <td className="p-3">Tutor</td>
              <td className="p-3">
                <button className="text-red-600">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AdminDashboard;
