import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
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

              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-sm input-bordered mb-4"
                    required
                  />
                </div>

                <div className="form-control mb-4">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
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

              <p className="text-center my-4">
                New to Melody Dance Studio?{" "}
                <Link to="/signup" className="text-orange-600 font-bold">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
