import { useForm } from "react-hook-form";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import readerSingIn from "../../assets/SignIn.json";
import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  window.scrollTo(0, 0);
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
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <Helmet>
          <title>Arts Adventure | Sign In</title>
        </Helmet>
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
                <div className="relative flex items-center justify-end">
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="input input-bordered pr-10 w-full"
                  />
                  <button
                    type="button"
                    className="btn-toggle absolute items-center mr-5"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </button>
                </div>
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
    </div>
  );
};

export default SignIn;
