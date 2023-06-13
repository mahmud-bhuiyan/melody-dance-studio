import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="divider">OR</div>
      <div className="text-center">
        <button onClick={handleGoogleSignIn}>
          <img
            src="https://i.ibb.co/k9GJVSZ/Google-Icon-PNG-rwscww.png"
            style={{ width: "25px" }}
            alt="google-icon"
          />
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
