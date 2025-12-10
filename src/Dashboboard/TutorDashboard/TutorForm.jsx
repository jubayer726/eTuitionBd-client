import { useState } from "react";

const TutorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    experience: "",
    salary: "",
    subjects: "",
    classes: "",
    method: "",
    address: "",
    photo: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Tutor Application Submitted Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-12 px-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-3xl">

        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Tutor Application Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Enter your full name"
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-semibold mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="01XXXXXXXXX"
              onChange={handleChange}
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block font-semibold mb-1">Gender</label>
            <select
              name="gender"
              className="w-full border rounded-lg px-4 py-2"
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Experience */}
          <div>
            <label className="block font-semibold mb-1">Teaching Experience</label>
            <input
              type="text"
              name="experience"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="e.g. 2 years, Beginner"
              onChange={handleChange}
              required
            />
          </div>

          {/* Expected Salary */}
          <div>
            <label className="block font-semibold mb-1">Expected Salary (BDT)</label>
            <input
              type="number"
              name="salary"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="e.g. 3000"
              onChange={handleChange}
              required
            />
          </div>

          {/* Preferred Subjects */}
          <div>
            <label className="block font-semibold mb-1">Preferred Subjects</label>
            <input
              type="text"
              name="subjects"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="e.g. Math, English, Physics"
              onChange={handleChange}
              required
            />
          </div>

          {/* Preferred Classes */}
          <div>
            <label className="block font-semibold mb-1">Preferred Classes</label>
            <input
              type="text"
              name="classes"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="e.g. Class 5 - 10, HSC"
              onChange={handleChange}
              required
            />
          </div>

          {/* Teaching Method */}
          <div>
            <label className="block font-semibold mb-1">Teaching Method</label>
            <select
              name="method"
              className="w-full border rounded-lg px-4 py-2"
              onChange={handleChange}
              required
            >
              <option value="">Select Method</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline (Student's Home)</option>
              <option value="Home Visit">Home Visit (Tutor's Home)</option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label className="block font-semibold mb-1">Address</label>
            <input
              type="text"
              name="address"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Your current location"
              onChange={handleChange}
              required
            />
          </div>

          {/* Profile Photo */}
          <div>
            <label className="block font-semibold mb-1">Profile Photo</label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              className="w-full"
              onChange={handleChange}
              required
            />
          </div>

          {/* Bio / Description */}
          <div>
            <label className="block font-semibold mb-1">Short Bio</label>
            <textarea
              name="bio"
              rows="4"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Tell us briefly about yourself..."
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Submit Application
          </button>

        </form>
      </div>
    </div>
  );
};

export default TutorForm;
