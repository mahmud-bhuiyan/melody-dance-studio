import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { status } = useRouteError();
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/pJbVwcn/404-error-page-1.jpg")`,
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold bg-yellow-400 rounded-xl p-2 text-black">
              {status || "404"}
            </h1>
            <Link
              to="/"
              className="btn btn-primary btn-lg font-bold normal-case mt-96"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
