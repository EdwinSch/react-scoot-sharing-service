import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import SideNav from "../components/SideNav/SideNav";
import Signup from "../components/Signup/Signup";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

const BaseLayout = () => {
  // Toggle Aside navigation
  const [asideIsOpen, setAsideIsOpen] = useState(false);

  return (
    <main>
      <Header asideIsOpen={asideIsOpen} setAsideIsOpen={setAsideIsOpen} />
      <SideNav asideIsOpen={asideIsOpen} setAsideIsOpen={setAsideIsOpen} />
      <Outlet />
      <Signup />
      <Footer />
    </main>
  );
};

export default BaseLayout;
