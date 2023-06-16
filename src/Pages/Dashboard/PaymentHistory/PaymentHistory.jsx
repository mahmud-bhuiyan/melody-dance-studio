import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    if (user) {
      fetch("https://melody-dance-studio-server.vercel.app/payments")
        .then((res) => res.json())
        .then((data) => {
          const userPaymentHistory = data.filter(
            (payment) => payment.email === user.email
          );
          setPaymentHistory(userPaymentHistory);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [user]);

  return (
    <div>
      <Helmet>
        <title>Payment History | Melody Dance Studio</title>
      </Helmet>
      <div className="sm:mt-14 md:mt-20 md:mx-10">
        <div className="shadow-lg p-4 sm:p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6">
            Payment History
          </h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra border border-slate-600 text-center rounded-lg">
              <thead>
                <tr className="bg-slate-300">
                  <th className="border text-lg">#</th>
                  <th className="border text-lg">Email</th>
                  <th className="border text-lg">Transaction ID</th>
                  <th className="border text-lg">Price</th>
                  <th className="border text-lg">Date</th>
                  <th className="border text-lg">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((payment, index) => (
                  <tr key={payment.transactionId}>
                    <td>{index + 1}</td>
                    <td className="border">{payment.email}</td>
                    <td className="border">{payment.transactionId}</td>
                    <td className="border">{payment.price}</td>
                    <td className="border">{payment.date}</td>
                    <td className="border">{payment.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
