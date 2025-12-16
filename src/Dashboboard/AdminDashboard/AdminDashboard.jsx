import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const AdminDashboard = () => {
  const { data: tuitions = [], refetch } = useQuery({
    queryKey: ["pendingTuitions"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/tuitions/pending`
      );
      return res.data;
    },
  });

  const handleApprove = async (id) => {
    await axios.put(`${import.meta.env.VITE_API_URL}/tuitions/approve/${id}`);
    refetch();
    toast.success("Tuition Approved!");
  };

  const handleDelete = async (id) => {
  const confirm = window.confirm("Are you sure you want to delete this tuition?");
  if (!confirm) return;

  try {
    await axios.delete(`${import.meta.env.VITE_API_URL}/tuitions/${id}`);
    toast.success("Tuition Deleted Successfully!");
    refetch();
  } catch (error) {
    console.error(error);
    toast.error("Failed to delete tuition");
  }
};

  return (
    <div className="mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Pending Tuition Requests</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Student Name</th>
                <th>Student Class</th>
                <th>Address</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tuitions.map((t) => (
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={t.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{t.name}</div>
                    </div>
                  </div>
                </td>
                <td>{t.studentClass}</td>
                <td>{t.location}</td>
                <td>{t.email}</td>
                <th>
                  <button
                    onClick={() => handleApprove(t._id)}
                    className="btn btn-success btn-sm mt-2 mx-2"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => handleDelete(t._id)}
                    className="btn btn-success btn-sm mt-2 "
                  >
                    Reject
                  </button>
                </th>
              </tr>
               ))}
            </tbody>
          </table>
        </div>
     
    </div>
  );
};

export default AdminDashboard;
