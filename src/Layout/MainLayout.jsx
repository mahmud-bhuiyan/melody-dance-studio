import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Home/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
