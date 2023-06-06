import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-110px)]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
