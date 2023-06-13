import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage =
          errorCode === "auth/wrong-password"
            ? "Incorrect password"
            : errorCode === "auth/user-not-found"
            ? "No user found with this email"
            : error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Helmet>
        <title>Login | Melody Dance Studio</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url('https://i.ibb.co/xY9TyPf/bg-25.png')`,
        }}
      >
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12"></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1
                className="text-3xl font-bold text-center mb-6 underline"
                style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)" }}
              >
                Login
              </h1>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="Email"
                    className="input input-sm input-bordered mb-4"
                  />
                  {errors.email && (
                    <span className="text-red-500 mt-1 ml-1">
                      Email is required
                    </span>
                  )}
                </div>

                <div className="form-control mb-4">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password", { required: true })}
                      name="password"
                      placeholder="Password"
                      className="input input-sm input-bordered pr-10 w-full"
                    />
                    <div
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaRegEyeSlash size={20} />
                      ) : (
                        <FaRegEye size={20} />
                      )}
                    </div>
                    {errors.password?.type === "required" && (
                      <p className="text-red-500 mt-1 ml-1" role="alert">
                        Password is required
                      </p>
                    )}
                  </div>
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn btn-sm btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>

              <p className="text-center text-red-600 font-bold">{error}</p>

              <p className="text-center my-4">
                New to Melody Dance Studio?{" "}
                <Link to="/signup" className="text-orange-600 font-bold">
                  Sign Up
                </Link>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
