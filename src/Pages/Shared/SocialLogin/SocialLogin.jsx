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
        const savedUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          image: loggedInUser.photoURL,
          role: "user",
        };
        fetch(`https://melody-dance-studio-server.vercel.app/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
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
