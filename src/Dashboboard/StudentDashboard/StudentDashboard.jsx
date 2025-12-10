import React from 'react';

const StudentDashboard = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Student Dashboard</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold">Enrolled Tuitions</h3>
          <p className="text-3xl font-bold text-indigo-600 mt-3">05</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold">Upcoming Classes</h3>
          <p className="text-3xl font-bold text-green-600 mt-3">03</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold">Messages</h3>
          <p className="text-3xl font-bold text-yellow-600 mt-3">12</p>
        </div>
      </div>

      {/* Enrolled Tuition Section */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h3 className="text-xl font-bold mb-4">Your Tuitions</h3>
        <ul className="space-y-3">
          <li className="p-4 bg-gray-50 rounded-lg flex justify-between">
            <span>Math Tuition (Rahim Sir)</span>
            <button className="text-indigo-600 font-medium">View</button>
          </li>
          <li className="p-4 bg-gray-50 rounded-lg flex justify-between">
            <span>English Grammar (Nusrat Jahan)</span>
            <button className="text-indigo-600 font-medium">View</button>
          </li>
        </ul>
      </div>

      {/* Payment History */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-bold mb-4">Payment History</h3>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-3">Date</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-3">2025-01-10</td>
              <td className="p-3">$20</td>
              <td className="p-3 text-green-600 font-medium">Paid</td>
            </tr>
            <tr>
              <td className="p-3">2025-01-01</td>
              <td className="p-3">$18</td>
              <td className="p-3 text-green-600 font-medium">Paid</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default StudentDashboard;