import { Link } from "react-router-dom";
import { navLinks } from "../../data";
import { GiHamburgerMenu } from "react-icons/gi";

import { LogoDark } from "../Logos";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header>
      <button className="toggle-menu-btn" type="button">
        <GiHamburgerMenu />
      </button>

      <Link to={"/"} className="home-link">
        <LogoDark aria-label="logo" />
      </Link>

      <Navigation />

      <button className="btn header-btn">get scootin</button>
    </header>
  );
};

export default Header;
