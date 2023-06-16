import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import PageHeaders from "../../../Components/pageHeaders/PageHeaders";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useState } from "react";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  const approveMutation = useMutation(
    (classId) =>
      axiosSecure.patch(`/classes/approve/${classId}`).then((res) => res.data),
    {
      onSuccess: () => {
        refetch();
        toast("Class is Approved!");
      },
    }
  );

  const denyMutation = useMutation(
    (classId) =>
      axiosSecure.patch(`/classes/deny/${classId}`).then((res) => res.data),
    {
      onSuccess: () => {
        refetch();
        toast("Class is Denied!");
      },
    }
  );

  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [selectedClass, setSelectedClass] = useState(null);

  const handleApprove = (cls) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve!",
    }).then((result) => {
      if (result.isConfirmed) {
        approveMutation.mutate(cls._id);
      }
    });
  };

  const handleDeny = (cls) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Deny!",
    }).then((result) => {
      if (result.isConfirmed) {
        denyMutation.mutate(cls._id);
      }
    });
  };

  const handleFeedbackModalOpen = (cls) => {
    setSelectedClass(cls);
    setFeedbackModalOpen(true);
  };

  const handleFeedbackModalClose = () => {
    setFeedbackModalOpen(false);
    setSelectedClass(null);
    setFeedbackText("");
  };

  const handleFeedbackSubmit = () => {
    if (!feedbackText.trim()) {
      toast.error("Please enter your feedback");
      return;
    }
    setTimeout(() => {
      toast.success("Feedback sent successfully!");
      handleFeedbackModalClose();
    }, 2000);
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
                      {classes.map((cls, i) => (
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
                              {cls?.duration ? cls?.duration : "1 month"}
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
                              disabled={cls.status === "approved"}
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => handleDeny(cls)}
                              className="btn btn-error text-white btn-xs m-2 px-5"
                              disabled={cls.status === "denied"}
                            >
                              Deny
                            </button>
                            <button
                              onClick={() => handleFeedbackModalOpen(cls)}
                              className="btn btn-info text-white btn-xs"
                            >
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
      {feedbackModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md">
            <h2 className="text-lg font-bold mb-4">Send Feedback</h2>
            <textarea
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              className="w-full h-32 border border-gray-300 mb-4 p-2 resize-none"
              placeholder="Write your feedback here..."
            ></textarea>
            <div className="flex justify-end">
              <button
                onClick={handleFeedbackSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Send
              </button>
              <button
                onClick={handleFeedbackModalClose}
                className="ml-2 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
