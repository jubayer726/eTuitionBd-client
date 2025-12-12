 const TutorDetails= () =>{
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="bg-base-200 p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold">Tuition Details</h1>
        <p className="mt-2 text-gray-600">
          Find all information about the tuition class, teacher, schedule, and fees.
        </p>
      </div>

      {/* Tuition Info */}
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        
        {/* Tuition Card */}
        <div className="bg-base-100 shadow rounded-xl p-5 border">
          <h2 className="text-xl font-semibold">Tuition Information</h2>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li><strong>Class:</strong> Class 8</li>
            <li><strong>Subject:</strong> Math</li>
            <li><strong>Medium:</strong> Bangla</li>
            <li><strong>Location:</strong> Dhanmondi, Dhaka</li>
          </ul>
        </div>

        {/* Teacher Card */}
        <div className="bg-base-100 shadow rounded-xl p-5 border">
          <h2 className="text-xl font-semibold">Teacher Information</h2>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li><strong>Name:</strong> Mr. Arif Hasan</li>
            <li><strong>Experience:</strong> 5+ Years</li>
            <li><strong>Qualification:</strong> BSc in Mathematics</li>
            <li><strong>Rating:</strong> ⭐⭐⭐⭐☆ (4.5)</li>
          </ul>
        </div>

      </div>

      {/* Schedule */}
      <div className="mt-6 bg-base-100 p-6 rounded-xl shadow border">
        <h2 className="text-xl font-semibold mb-3">Class Schedule</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-base-200 p-4 rounded-lg">
            <h3 className="font-semibold">Days</h3>
            <p>Sunday, Tuesday, Thursday</p>
          </div>

          <div className="bg-base-200 p-4 rounded-lg">
            <h3 className="font-semibold">Time</h3>
            <p>5:00 PM - 6:30 PM</p>
          </div>

          <div className="bg-base-200 p-4 rounded-lg">
            <h3 className="font-semibold">Duration</h3>
            <p>1.5 Hours / Class</p>
          </div>
        </div>
      </div>

      {/* Fees */}
      <div className="mt-6 bg-base-100 p-6 rounded-xl shadow border">
        <h2 className="text-xl font-semibold mb-3">Tuition Fees</h2>

        <div className="flex justify-between text-lg">
          <p>Monthly Fee</p>
          <p className="font-bold">3000 BDT</p>
        </div>
      </div>

      {/* Apply Button */}
      <div className="mt-8 text-center">
        <button className="btn btn-primary btn-wide text-lg">Apply for Tuition</button>
      </div>
    </div>
  );
}
export default TutorDetails;
