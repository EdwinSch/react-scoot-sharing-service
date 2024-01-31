import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Signup from "../components/Signup/Signup";
import Footer from "../components/Footer/Footer";

const BaseLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Signup />
      <Footer />
    </main>
  );
};

export default BaseLayout;
