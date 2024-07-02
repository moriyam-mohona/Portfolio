import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Navbar/Navbar";

const Root = () => {
  return (
    <div className="px-18">
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
};

export default Root;
