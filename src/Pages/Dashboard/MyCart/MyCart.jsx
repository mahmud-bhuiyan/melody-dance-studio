import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [enrolled, refetch] = useCart();
  console.log(enrolled);
  const total = enrolled.reduce((sum, item) => item.price + sum, 0).toFixed(2);

  const handleDelete = (item) => {
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
        fetch(`http://localhost:7000/enrolled/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Item has been deleted from cart.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>My Enrolment | Melody Dance Studio</title>
      </Helmet>
      <div className="sm:mt-14 md:mt-20 md:mx-10">
        <div className="shadow-lg p-4 sm:p-6 rounded-lg">
          <h2 className="text-3xl">My Enrolled Classes: {enrolled.length}</h2>
          <h2 className="text-3xl">Total Amount: $ {total}</h2>
          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="table table-zebra border border-slate-600 text-center rounded-lg">
                <thead>
                  <tr className="bg-slate-300 ">
                    <th className="border text-lg">Number</th>
                    <th className="border text-lg">Image</th>
                    <th className="border text-lg">Name</th>
                    <th className="border text-lg">Job</th>
                    <th className="border text-lg">Favorite Color</th>
                    <th className="border text-lg">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {enrolled.map((item, i) => (
                    <tr key={item._id}>
                      <td className="border">{i + 1}</td>
                      <td className="border">
                        <div className="avatar">
                          <div className="mask mask-squircle w-16 h-16">
                            <img
                              src={item.classImage}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="border">{item.className}</td>
                      <td className="border">{item.instructorName}</td>
                      <td className="border">{item.price}</td>
                      <td className="border">
                        <button
                          onClick={() => handleDelete(item)}
                          className="text-xl text-red-600"
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
  );
};

export default MyCart;
