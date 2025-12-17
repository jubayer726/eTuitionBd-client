import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";


const MyTuitions = () => {
  const { user } = useAuth();

  const { data: tuitions = [], refetch } = useQuery({
    queryKey: ["myTuitions", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/tuitions/student/${user.email}`
      );
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure?");
    if (!confirm) return;

    await axios.delete(`${import.meta.env.VITE_API_URL}/tuitions/${id}`);
    toast.success("Tuition deleted");
    refetch();
  };

  return (
    <div className="bg-gray-100">
      <h2 className="text-2xl font-bold  p-8">My Tuition Posts</h2>

     <div className="grid grid-cols-4 gap-8">
       {tuitions.map((t) => (
        <div key={t._id} className="bg-white p-4 m-5 rounded mb-3">
          <h3 className="font-semibold">{t.title}</h3>
          <p>Class: {t.studentClass}</p>
          <p>Salary: {t.salary} $</p>
          <p>
            Status:{" "}
            <span
              className={`badge ${
                t.status === "approved"
                  ? "badge-success"
                  : t.status === "pending"
                  ? "badge-warning"
                  : "badge-error"
              }`}
            >
              {t.status}
            </span>
          </p>

          <div className="mt-3 flex gap-2">
            <Link
              to={`/dashboard/edit-tuition/${t._id}`}
              className="btn btn-sm btn-info"
            >
              Edit
            </Link>

            <button
              onClick={() => handleDelete(t._id)}
              className="btn btn-sm btn-error"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {tuitions.length === 0 && (
        <p className="text-gray-500">No tuition posts found.</p>
      )}
     </div>
    </div>
  );
};

export default MyTuitions;

