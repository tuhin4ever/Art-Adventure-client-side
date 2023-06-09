import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import readerSingIn from "../../assets/SignIn.json";
import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const SignIn = () => {
  const { singIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    singIn(data.email, data.password).then((result) => {
      navigate(from, { replace: true });
      // console.log("result", result);
      reset();

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sign In Success",
        text: `Welcome Back ${result.user.displayName} ✨`,
        showConfirmButton: false,
        timer: 2000,
      });
    });
  };

  return (
    <div
      className="hero min-h-screen bg-cover bg-center bg-base-200"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/5BBfCcz/pexels-yigithan-bal-1108532.jpg)",
      }}
    >
      <div className="hero-content my-16 flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
              />

              {errors.password?.type === "required" && (
                <span className="text-red-600">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600">Password is too short</span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-600">Password is too long</span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-600">
                  Password must contain at least one uppercase letter, one
                  lowercase letter, one number, and one special character
                </span>
              )}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-outline btn-primary rounded-full"
                type="submit"
                value="Sign In"
              />
            </div>
          </form>
          <p className="my-4 text-center text-sm font-bold">
            New hare do not have an account ? &nbsp;
            <Link to="/SignUp" className="text-secondary">
              Sign Up
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
        <div className="text-center lg:text-left ">
          <h1 className=" text-5xl font-bold text-center title-text uppercase Prism-text">
            Sign In now !
          </h1>
          <Lottie animationData={readerSingIn} className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
