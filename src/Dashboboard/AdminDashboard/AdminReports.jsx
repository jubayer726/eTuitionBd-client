import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const AdminReports = () => {

    const { data: payments = [], isLoading} = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/orders`);
      return res.data;
    },
  });

  const { data: earnings = {} } = useQuery({
    queryKey: ["totalEarnings"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/payments/total-earnings`
      );
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Reports & Analytics</h2>

      {/* Total Earnings */}
      <div className="bg-green-100 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold">
          Total Platform Earnings
        </h3>
        <p className="text-2xl font-bold text-green-700">
          USD: {earnings.total || 0}$
        </p>
      </div>

      {/* Transactions Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Student</th>
              <th>Amount</th>
              <th>Tutor Id</th>
              <th>Transaction ID</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((pay) => (
              <tr key={pay._id}>
                <td>
                  {new Date(pay.date).toLocaleDateString()}
                </td>
                <td>{pay.student}</td>
                <td className="font-semibold">
                  {pay.price} $
                </td>
                <td className="text-xs">{pay.tutorId}</td>
                <td className="text-xs">
                  {pay.transactionId}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default AdminReports;
