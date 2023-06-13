import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:7000/users");
    return res.json();
  });

  const handleDelete = (user) => {
    console.log(user);
  };

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:7000/users/admin/${user._id}`, { method: "PATCH" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          toast(`${user.name}, is an ADMIN Now!`);
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
          <div className="shadow-lg p-4 sm:p-6 rounded-lg">
            <div>
              <h2 className="text-2xl">Total Users: {users.length}</h2>
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
                          {user.role === "admin" ? (
                            "ADMIN"
                          ) : (
                            <button onClick={() => handleMakeAdmin(user)}>
                              <FaUserShield className="text-3xl mx-auto"></FaUserShield>
                            </button>
                          )}
                        </td>
                        <td className="border">
                          <button
                            onClick={() => handleDelete(user)}
                            className="text-xl btn btn-error px-4"
                          >
                            <FaTrashAlt />
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
