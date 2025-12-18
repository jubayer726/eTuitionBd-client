import { FaMapMarkerAlt, FaHome, FaCalendarAlt, FaUser } from "react-icons/fa";
import { MdClass, MdSubject } from "react-icons/md";
import { Link } from "react-router";

const TuitionCard = ({ stdn }) => {
   const {_id, title, subjects, daysPerWeek, createdAt, salary, studentClass, location } = stdn;

  return (
    <Link to= {`/tuition/${_id}`} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">

      {/* Top Row */}
      <div className="flex justify-between items-start">
        <p className="flex items-center gap-2 text-gray-600 text-sm">
          <FaMapMarkerAlt className="text-indigo-600" />
          {location}
        </p>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 mt-3">
        {title}
      </h2>

      {/* Tags */}
      <div className="flex gap-3 mt-4 flex-wrap">
        <span className="flex items-center gap-2 bg-purple-600 text-white px-3 py-1 rounded-md text-sm">
          <FaHome /> Home Tutoring
        </span>
        <span className="flex items-center gap-2 bg-teal-600 text-white px-3 py-1 rounded-md text-sm">
          <FaCalendarAlt /> an hour ago
        </span>
      </div>

      {/* Details Grid */}
      <div className="grid md:grid-cols-2 gap-6 mt-6 text-gray-700">
        <div>
          <p className="flex items-center gap-2 font-medium">
            <MdClass /> Class:
          </p>
          <p className="text-gray-600">{studentClass}</p>
        </div>

        <div>
          <p className="flex items-center gap-2 font-medium">
            <FaUser /> Preferred Tutor:
          </p>
          <p className="text-gray-500">preferredTutor</p>
        </div>

        <div>
          <p className="flex items-center gap-2 font-medium">
            <FaCalendarAlt /> Tutoring Days:
          </p>
          <p className="text-gray-500">{daysPerWeek} Days/Week</p>
        </div>

        <div>
          <p className="flex items-center gap-2 font-medium">
            <MdSubject /> Subject:
          </p>
          <div className="flex gap-2 flex-wrap mt-1">
              <span           
                className="bg-green-500 text-white px-2 py-1 rounded text-xs"
              >
                {subjects}
              </span>
          </div>
        </div>

        <div>
          <p className="flex items-center gap-2 font-medium">
            💰 Salary:
          </p>
          <p className="text-blue-600 font-bold text-lg">
            {salary} $<span className="text-sm text-gray-500">/Month</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-gray-600"><span className="font-semibold">Posted at:</span> <span className="text-sm">{new Date(createdAt).toLocaleString("en-BD")}</span> </p>


        {/* <Link
          to={`/tuition/${_id}`}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:scale-105 transition"
        >
          View Details
        </Link> */}
      </div>
    </Link>
  );
};

export default TuitionCard;

