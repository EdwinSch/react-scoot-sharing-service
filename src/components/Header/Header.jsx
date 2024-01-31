import { Link } from "react-router-dom";
import { navLinks } from "../../data";

const Header = () => {
  return (
    <header>
      <Link to="/about">About link</Link>
    </header>
  );
};

export default Header;
