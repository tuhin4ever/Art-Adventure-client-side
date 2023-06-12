import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { singInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const handleGoogleSingIn = () => {
    singInWithGoogle().then((result) => {
      const loggedInUser = result.user;
      // console.log(loggedInUser);

      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        image: loggedInUser.photoURL,
        role: "student",
      };
      fetch(`https://arts-adventure-server.vercel.app/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });

      Swal.fire({
        icon: "success",
        title: "User logged in successfully",
        text: `Welcome ${loggedInUser.displayName} ✨`,
        showConfirmButton: false,
        timer: 2000,
      });
    });
  };

  return (
    <div>
      <div className="divider">-</div>
      <div className="w-full text-center my-4">
        <button
          onClick={handleGoogleSingIn}
          className="btn btn-circle btn-outline"
        >
          <img src="../../assets/google-svgrepo-com.svg" className="w-8" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
