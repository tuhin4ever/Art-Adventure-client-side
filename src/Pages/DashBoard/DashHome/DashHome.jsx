import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const DashHome = () => {
  const { user } = useAuth();

  return (
    <div className="h-screen w-full relative">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: "url('https://i.ibb.co/q0b0Gr0/IMG-1593.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <SectionTitle
          subHeading="Welcome to the Arts Adventure Dashboard!"
          heading="Dashboard Home"
        ></SectionTitle>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative h-full flex items-center justify-center">
        <Helmet>
          <title>Arts Adventure | Dashboard Home</title>
        </Helmet>
        <div className="text-center">
          <img
            src={user.photoURL}
            alt="User Photo"
            className=" border-double border-4 border-red-800 mx-auto rounded-full w-64 h-64 mb-4 shadow-lg"
          />
          <h1 className="text-4xl font-bold text-white mb-2 Kalam-text">
            {user.displayName}
          </h1>
          <p className="text-lg text-gray-300 mb-4 Permanent-text">
            {user.email}
          </p>
          {/* Add additional dashboard content here */}
        </div>
      </div>
    </div>
  );
};

export default DashHome;
