
import { Link, useRouteError } from "react-router-dom";
import readerError from "../../assets/readerError.json";
import Lottie from "lottie-react";
const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <section className="flex">
      <div className="container mt-20  flex flex-col items-center justify-center">
        {/* Lottie Animation */}
        <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56 sm:h-96">
            <Lottie animationData={readerError} loop={true} />
          </div>
        </div>
        <div className="text-center mt-20 md:pl-36">
          <p className="text-2xl font-semibold md:text-3xl mt-5  text-red-600">
            {error?.message}
          </p>
          <Link to="/">
            <button className="btn btn-xs btn-outline border-0 border-b-2 hover:bg-error-content  border-red-900  text-black  py-2 px-6 rounded-full font-bold md:mt-5">
              Back to homepage
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
