import { useState } from "react";

const AddRegisterForm = () => {
 const [formData, setFormData] = useState({
    studentName: "",
    class: "",
    subject: "",
    budget: "",
    location: "",
    schedule: "",
    type: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Tuition Posted Successfully!");
  };
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-12 px-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-3xl">

        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Post a New Tuition
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Student Name */}
          <div>
            <label className="block font-semibold mb-1">Student Name</label>
            <input
              type="text"
              name="studentName"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Enter student name"
              onChange={handleChange}
              required
            />
          </div>

          {/* Class */}
          <div>
            <label className="block font-semibold mb-1">Class</label>
            <input
              type="text"
              name="class"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="e.g. Class 8, Class 10, HSC"
              onChange={handleChange}
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block font-semibold mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="e.g. Math, English, Physics"
              onChange={handleChange}
              required
            />
          </div>

          {/* Budget */}
          <div>
            <label className="block font-semibold mb-1">Monthly Budget (BDT)</label>
            <input
              type="number"
              name="budget"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="e.g. 1500"
              onChange={handleChange}
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-semibold mb-1">Location</label>
            <input
              type="text"
              name="location"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="e.g. Mirpur 10, Dhanmondi, Online"
              onChange={handleChange}
              required
            />
          </div>

          {/* Schedule */}
          <div>
            <label className="block font-semibold mb-1">Preferred Schedule</label>
            <input
              type="text"
              name="schedule"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="e.g. 3 Days/Week, Every Evening"
              onChange={handleChange}
              required
            />
          </div>

          {/* Tuition Type */}
          <div>
            <label className="block font-semibold mb-1">Tuition Type</label>
            <select
              name="type"
              className="w-full border rounded-lg px-4 py-2"
              onChange={handleChange}
              required
            >
              <option value="">Select Type</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Home Visit">Home Visit</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              rows="4"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Add additional details about the tuition..."
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Post Tuition
          </button>

        </form>
      </div>
    </div>
  );
};
export default AddRegisterForm
