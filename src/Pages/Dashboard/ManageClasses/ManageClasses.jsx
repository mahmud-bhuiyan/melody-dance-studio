import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import PageHeaders from "../../../Components/pageHeaders/pageHeaders";
import useData from "../../../Hooks/useData";
// import { FaTrashAlt, FaUserShield } from "react-icons/fa";

const ManageClasses = () => {
  const [data] = useData();

  const handleApprove = (cls) => {
    console.log(cls);
  };

  const handleDeny = (cls) => {
    console.log(cls);
  };

  return (
    <div>
      <Helmet>
        <title>Manage Classes | Melody Dance Studio</title>
      </Helmet>
      <ToastContainer />
      <div>
        <div className="sm:mt-14 md:mt-20 md:mx-10">
          <PageHeaders text={"Manage Classes"}></PageHeaders>
          <div className="shadow-lg p-4 sm:p-6 rounded-lg">
            <div className="mt-6">
              <div className="overflow-x-auto">
                <div className="overflow-x-auto">
                  <table className="table table-zebra border text-center">
                    <thead>
                      <tr className="bg-slate-300 ">
                        <th className="border text-lg">#</th>
                        <th className="border text-lg">Image</th>
                        <th className="border text-lg">Details</th>
                        <th className="border text-lg">Instructor</th>
                        <th className="border text-lg">Seats</th>
                        <th className="border text-lg">Price</th>
                        <th className="border text-lg">Status</th>
                        <th className="border text-lg">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.slice(0, 2).map((cls, i) => (
                        <tr key={cls._id}>
                          <td className="border">{i + 1}</td>
                          <td>
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src={cls.classImage} alt={cls.className} />
                              </div>
                            </div>
                          </td>
                          <td>
                            {cls.className}
                            <br />
                            <span className="badge badge-success badge-md text-white mt-2">
                              {cls?.duration
                                ? cls?.duration + " month"
                                : "1 month"}
                            </span>
                          </td>
                          <td>
                            {cls.instructorName}
                            <br />
                            <span className="badge badge-success badge-md text-white mt-2">
                              {cls.instructorEmail}
                            </span>
                          </td>
                          <td>{cls.availableSeats}</td>
                          <td>{cls.price}</td>
                          <td>{cls.status}</td>
                          <th>
                            <button
                              onClick={() => handleApprove(cls)}
                              className="btn btn-success text-white btn-xs"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => handleDeny(cls)}
                              className="btn btn-error text-white btn-xs m-2 px-5"
                            >
                              Deny
                            </button>
                            <button className="btn btn-info text-white btn-xs">
                              Feedback
                            </button>
                          </th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
