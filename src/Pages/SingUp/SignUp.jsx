import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import readerSingUp from "../../assets/ARTSsingUP.json";
import Lottie from "lottie-react";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  window.scrollTo(0, 0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, setReload } = useContext(AuthContext);
  const navigate = useNavigate();

  const [passwordError, setPasswordError] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    setButtonDisabled(true); // Disable the button on form submit
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      if (loggedUser) {
        updateUserProfile(data.name, data.photoURL).then(() => {
          const saveUser = {
            name: data.name,
            email: data.email,
            image: data.photoURL,
            role: "student",
          };

          console.log(saveUser);
          fetch(`https://arts-adventure-server.vercel.app/users`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              navigate("/");
              setReload(true);
            });
        });
      }
    });
  };

  return (
    <div
      className="hero min-h-screen bg-cover bg-center bg-base-200"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/2gj8j8F/pexels-alexander-grey-3694871.jpg)",
      }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <Helmet>
          <title>Arts Adventure | Sign Up</title>
        </Helmet>
        <div className="hero-content my-16 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold text-center title-text uppercase Prism-text">
              Sign Up now!
            </h1>
            <Lottie animationData={readerSingUp} className="w-96" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="grid grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    {...register("photoURL", { required: true })}
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-600">Photo URL is required</span>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
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
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    {...register("confirmPassword", { required: true })}
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="input input-bordered"
                  />
                  {errors.confirmPassword && (
                    <span className="text-red-600">
                      Confirm Password is required
                    </span>
                  )}
                  {passwordError && (
                    <span className="text-red-600">{passwordError}</span>
                  )}
                </div>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-outline btn-primary rounded-full"
                  type="submit"
                  value="Sign Up"
                  disabled={isButtonDisabled} //Disable the button based on the state
                />
              </div>
            </form>
            <p className="text-center text-sm font-bold">
              Already have an account?{" "}
              <Link to="/SignIn" className="text-secondary">
                Sign In
              </Link>
            </p>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
