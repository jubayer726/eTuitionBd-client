import { useParams } from "react-router";

const TuitionDetails = () =>{
    const {id} = useParams();
    console.log(id);
  return (
    <div className="max-w-4xl mx-auto p-6">

      {/* Header */}
      <div className="bg-base-200 p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold">Student Details</h1>
        <p className="mt-2 text-gray-600">
          Full information about the student, guardian, academic level and contact details.
        </p>
      </div>

      {/* Student Basic Info */}
      <div className="mt-6 bg-base-100 p-6 rounded-xl shadow border">
        <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>

        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <p><strong>Name:</strong> Rahim Ahmed</p>
          <p><strong>Gender:</strong> Male</p>
          <p><strong>Age:</strong> 14 Years</p>
          <p><strong>Class:</strong> Class 8</p>
          <p><strong>Medium:</strong> Bangla</p>
          <p><strong>School:</strong> Dhanmondi Govt. Boys School</p>
        </div>
      </div>

      {/* Guardian Info */}
      <div className="mt-6 bg-base-100 p-6 rounded-xl shadow border">
        <h2 className="text-2xl font-semibold mb-4">Guardian Information</h2>

        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <p><strong>Guardian Name:</strong> Abdul Karim</p>
          <p><strong>Relation:</strong> Father</p>
          <p><strong>Phone Number:</strong> 017XXXXXXXX</p>
          <p><strong>Alternate Phone:</strong> 018XXXXXXXX</p>
          <p><strong>Occupation:</strong> Businessman</p>
        </div>
      </div>

      {/* Address Info */}
      <div className="mt-6 bg-base-100 p-6 rounded-xl shadow border">
        <h2 className="text-2xl font-semibold mb-4">Address Information</h2>

        <p className="text-gray-700">
          <strong>Full Address:</strong> House 12, Road 3, Dhanmondi, Dhaka
        </p>
      </div>

      {/* Tuition Preference */}
      <div className="mt-6 bg-base-100 p-6 rounded-xl shadow border">
        <h2 className="text-2xl font-semibold mb-4">Tuition Preference</h2>

        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <p><strong>Preferred Subjects:</strong> Math, Science</p>
          <p><strong>Preferred Schedule:</strong> Evening</p>
          <p><strong>Days per Week:</strong> 3 Days</p>
          <p><strong>Budget:</strong> 3000-4000 BDT / Month</p>
        </div>
      </div>

      {/* Extra Notes */}
      <div className="mt-6 bg-base-100 p-6 rounded-xl shadow border">
        <h2 className="text-2xl font-semibold mb-4">Additional Notes</h2>

        <p className="text-gray-700">
          Student needs extra support in Math and prefers a friendly teaching style.
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex justify-center gap-4">
        <button className="btn btn-primary">Edit Details</button>
        <button className="btn btn-secondary">Message Guardian</button>
      </div>

    </div>
  );
}
export default TuitionDetails 
