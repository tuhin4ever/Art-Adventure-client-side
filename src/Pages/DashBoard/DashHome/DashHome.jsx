import useAuth from "../../../hooks/useAuth";

const DashHome = () => {
  const { user } = useAuth();

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="text-center">
        <img
          src={user.photoURL}
          alt="User Photo"
          className="mx-auto rounded-full w-40 h-40 mb-4 shadow-lg"
        />
        <h1 className="text-4xl font-bold text-white mb-2">{user.displayName}</h1>
        <p className="text-lg text-gray-300 mb-4">{user.email}</p>
        {/* Add additional dashboard content here */}
      </div>
    </div>
  );
};

export default DashHome;

