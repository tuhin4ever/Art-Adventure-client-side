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
      console.log(loggedInUser);
      Swal.fire({
        icon: "success",
        title: "User logged in successfully",
        text: `Welcome ${loggedInUser.displayName} ✨`,
        showConfirmButton: false,
        timer: 2000,
      });

      navigate(from);
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
          <img src="../../../public/google-svgrepo-com.svg" className="w-8" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
