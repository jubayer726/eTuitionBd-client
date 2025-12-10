const TutorDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <h2 className="text-2xl font-bold mb-6">Tutor Dashboard</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold">Approved Tuitions</h3>
          <p className="text-3xl text-green-600 font-bold mt-2">08</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold">Pending Applications</h3>
          <p className="text-3xl text-yellow-600 font-bold mt-2">03</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold">Monthly Earnings</h3>
          <p className="text-3xl text-indigo-600 font-bold mt-2">$220</p>
        </div>

      </div>

      {/* Approved Tuition List */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h3 className="text-xl font-bold mb-4">Your Approved Tuitions</h3>

        <div className="space-y-4">
          <div className="flex justify-between bg-gray-50 p-4 rounded-lg">
            <span>Physics - Class 10</span>
            <button className="text-indigo-600">Manage</button>
          </div>
          <div className="flex justify-between bg-gray-50 p-4 rounded-lg">
            <span>Math - Class 8</span>
            <button className="text-indigo-600">Manage</button>
          </div>
        </div>
      </div>

      {/* Class Schedule */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-bold mb-4">Today's Classes</h3>

        <ul className="space-y-3">
          <li className="flex justify-between p-4 bg-gray-50 rounded-lg">
            <span>Math Class — 4:00 PM</span>
            <span className="text-green-600 font-medium">Upcoming</span>
          </li>
          <li className="flex justify-between p-4 bg-gray-50 rounded-lg">
            <span>Physics Class — 7:00 PM</span>
            <span className="text-yellow-600 font-medium">Pending</span>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default TutorDashboard;
