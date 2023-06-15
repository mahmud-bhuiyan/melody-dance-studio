import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import PageHeaders from "../../../Components/pageHeaders/PageHeaders";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleDelete = (user) => {
    console.log(user);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            toast(`${user.name}, has been deleted!`);
          }
        });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make ADMIN!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://melody-dance-studio-server.vercel.app/users/admin/${user._id}`,
          {
            method: "PATCH",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              refetch();
              toast(`${user.name}, is an ADMIN Now!`);
            } else {
              toast("User role is not updated!");
            }
          });
      }
    });
  };

  const handleMakeInstructor = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://melody-dance-studio-server.vercel.app/users/instructor/${user._id}`,
          {
            method: "PATCH",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              refetch();
              toast(`${user.name}, is an Instructor Now!`);
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>All Users | Melody Dance Studio</title>
      </Helmet>
      <ToastContainer />
      <div>
        <div className="sm:mt-14 md:mt-20 md:mx-10">
          <PageHeaders text={"Manage Users"}></PageHeaders>
          <div className="shadow-lg p-4 sm:p-6 rounded-lg">
            <div>
              <h2 className="text-xl text-center">
                Total Users: {users.length}
              </h2>
            </div>
            <div className="mt-6">
              <div className="overflow-x-auto">
                <table className="table table-zebra border border-slate-600 text-center rounded-lg">
                  <thead>
                    <tr className="bg-slate-300 ">
                      <th className="border text-lg">#</th>
                      <th className="border text-lg">Image</th>
                      <th className="border text-lg">Name</th>
                      <th className="border text-lg">Email</th>
                      <th className="border text-lg">Role</th>
                      <th className="border text-lg">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, i) => (
                      <tr key={user._id}>
                        <td className="border">{i + 1}</td>
                        <td className="border">
                          <div className="avatar">
                            <div className="mask mask-squircle w-14 h-14">
                              <img src={user.image} alt={user.name} />
                            </div>
                          </div>
                        </td>
                        <td className="border">{user.name}</td>
                        <td className="border">{user.email}</td>
                        <td className="border">
                          {user.role === "admin"
                            ? "ADMIN"
                            : "Student" && user.role === "instructor"
                            ? "Instructor"
                            : "Student"}
                        </td>
                        <td className="border">
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className="btn btn-success text-white btn-xs"
                          >
                            Admin
                          </button>
                          <button
                            onClick={() => handleMakeInstructor(user)}
                            className="btn btn-info text-white btn-xs m-2 px-5"
                          >
                            Instructor
                          </button>
                          <button
                            onClick={() => handleDelete(user)}
                            className=" btn btn-error btn-xs px-2"
                          >
                            Delete
                          </button>
                        </td>
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
  );
};

export default AllUsers;
