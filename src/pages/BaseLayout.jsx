import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const BaseLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <footer>FOOTER Placeholder</footer>
    </main>
  );
};

export default BaseLayout;
