import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const { user } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.classImage[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          const imgURL = response.data.display_url;
          const { className, availableSeats, price, duration, details } = data;
          const newClass = {
            className,
            classImage: imgURL,
            instructorName: user.displayName,
            instructorEmail: user.email,
            instructorImage: user.photoURL,
            availableSeats: parseFloat(availableSeats),
            price: parseFloat(price),
            duration,
            details,
            enrolled: 0,
            status: "pending",
            feedback: "",
          };
          console.log(newClass);
          axiosSecure.post("/classes", newClass).then((data) => {
            if (data.data.insertedId) {
              toast("New class added successfully!");
              reset();
            }
          });
        }
      });
  };

  return (
    <div className="container mx-auto py-8">
      <Helmet>
        <title>Add New Class | Melody Dance Studio</title>
      </Helmet>
      <ToastContainer />
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="py-6 px-8 bg-blue-500 text-white text-center">
          <h2 className="text-2xl font-bold">Add A New Class</h2>
        </div>
        <div className="px-8 py-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="class-name"
                className="mb-2 font-medium text-gray-700"
              >
                Class name:{" "}
                {errors.className && (
                  <span className="text-red-500 mt-1 ml-1">
                    Class Name is required
                  </span>
                )}
              </label>
              <input
                type="text"
                id="class-name"
                {...register("className", { required: true })}
                className="input border border-slate-400"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="class-image"
                className="mb-2 font-medium text-gray-700"
              >
                Class Image:{" "}
                {errors.classImage && (
                  <span className="text-red-500 mt-1 ml-1">
                    Class Image is required
                  </span>
                )}
              </label>
              <input
                type="file"
                id="class-image"
                {...register("classImage", { required: true })}
                accept="image/*"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="instructor-name"
                className="mb-2 font-medium text-gray-700"
              >
                Instructor name:
              </label>
              <input
                type="text"
                id="instructor-name"
                name="instructorName"
                value={user.displayName}
                readOnly
                className="input border border-slate-400"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="instructor-email"
                className="mb-2 font-medium text-gray-700"
              >
                Instructor email:
              </label>
              <input
                type="email"
                id="instructor-email"
                name="instructorEmail"
                value={user.email}
                readOnly
                className="input border border-slate-400"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="available-seats"
                className="mb-2 font-medium text-gray-700"
              >
                Available seats:{" "}
                {errors.availableSeats && (
                  <span className="text-red-500 mt-1 ml-1">
                    Available Seats is required
                  </span>
                )}
              </label>
              <input
                type="number"
                id="available-seats"
                {...register("availableSeats", { required: true })}
                className="input border border-slate-400"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="price" className="mb-2 font-medium text-gray-700">
                Price:{" "}
                {errors.price && (
                  <span className="text-red-500 mt-1 ml-1">
                    Price is required
                  </span>
                )}
              </label>
              <input
                type="number"
                id="price"
                {...register("price", { required: true })}
                className="input border border-slate-400"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="duration"
                className="mb-2 font-medium text-gray-700"
              >
                Course duration:{" "}
                {errors.duration && (
                  <span className="text-red-500 mt-1 ml-1">
                    Course duration is required
                  </span>
                )}
              </label>
              <select
                id="duration"
                {...register("duration", { required: true })}
                className="select border border-slate-400"
              >
                <option disabled value="">
                  Select duration
                </option>
                <option value="1 month">1 month</option>
                <option value="2 month">2 months</option>
                <option value="3 month">3 months</option>
              </select>
            </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="details"
                className="mb-2 font-medium text-gray-700"
              >
                Details:{" "}
                {errors.details && (
                  <span className="text-red-500 mt-1 ml-1">
                    Details is required
                  </span>
                )}
              </label>
              <textarea
                id="details"
                {...register("details", { required: true })}
                className="input border border-slate-400 h-28"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Add Class
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
