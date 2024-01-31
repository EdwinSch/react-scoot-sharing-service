import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const BaseLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <footer>FOOTER PLaceholder</footer>
    </main>
  );
};

export default BaseLayout;
