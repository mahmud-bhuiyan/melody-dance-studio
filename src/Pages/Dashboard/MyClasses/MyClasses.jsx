import { Helmet } from "react-helmet-async";

const enrolledClasses = [
  {
    _id: "64886d3eac15e5dd87db4b68",
    classId: "CL0007",
    className: "Manipuri",
    classImage: "https://i.ibb.co/RCx4qQz/dance-b-4.png",
    instructorName: "Sanjay Singh",
    instructorEmail: "sanjay@example.com",
    instructorImage: "https://i.ibb.co/1b2KzqH/instructor-6.png",
    availableSeats: 12,
    price: 20,
    status: "approved",
    enrolled: 9,
    feedback: [],
  },
];

const MyClasses = () => {
  return (
    <div>
      <Helmet>
        <title>My Classes | Melody Dance Studio</title>
      </Helmet>
      <div className="sm:mt-14 md:mt-20 md:mx-10">
        <div className="shadow-lg p-4 sm:p-6 rounded-lg">
          <div className="mt-6">
            <h2 className="text-3xl font-bold text-center mb-3">
              My Created Classes
            </h2>
            <div className="overflow-x-auto">
              <table className="table table-zebra border border-slate-600 text-center rounded-lg">
                <thead>
                  <tr className="bg-slate-300 ">
                    <th className="border text-lg">#</th>
                    <th className="border text-lg">Image</th>
                    <th className="border text-lg">Class Name</th>
                    <th className="border text-lg">Instructor</th>
                    <th className="border text-lg">Price</th>
                    <th className="border text-lg">Status</th>
                    <th className="border text-lg">Feedback</th>
                    <th className="border text-lg">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {enrolledClasses.map((item, i) => (
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
                      <td className="border">{item.status}</td>
                      <td className="border">
                        {item.feedback.length > 0 ? (
                          item.feedback.map((feedback, index) => (
                            <div key={index}>{feedback}</div>
                          ))
                        ) : (
                          <div>No feedback yet</div>
                        )}
                      </td>
                      <td className="border">
                        <button className="text-green-500 hover:text-green-700">
                          Update
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

export default MyClasses;
