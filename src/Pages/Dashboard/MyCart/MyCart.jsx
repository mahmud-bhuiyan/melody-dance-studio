import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const MyCart = () => {
  const [paid, setPaid] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/payments")
      .then((res) => res.json())
      .then((data) => {
        setPaid((prevPaid) => [...prevPaid, ...data]);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>My Enrolment | Melody Dance Studio</title>
      </Helmet>
      <div className="sm:mt-14 md:mt-20 md:mx-10">
        <div className="shadow-lg p-4 sm:p-6 rounded-lg">
          <div className="flex justify-between">
            <h2 className="text-2xl">My Enrolled Classes: </h2>
            <h2 className="text-2xl">
              Total Amount: {paid.reduce((acc, curr) => acc + curr.price, 0)}
            </h2>
          </div>
          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="table table-zebra border border-slate-600 text-center rounded-lg">
                <thead>
                  <tr className="bg-slate-300">
                    <th className="border text-lg">#</th>
                    <th className="border text-lg">Class Name</th>
                    <th className="border text-lg">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {paid.map((payment, index) => (
                    <tr key={payment._id}>
                      <td className="border">{index + 1}</td>
                      <td className="border">
                        {payment.classNames.length > 1
                          ? payment.classNames.map((className) => (
                              <div key={className}>{className}</div>
                            ))
                          : payment.classNames[0]}
                      </td>
                      <td className="border">{payment.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
