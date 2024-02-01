import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import { LogoDark } from "../Logos";
import Navigation from "../Navigation/Navigation";
import GetScootinButton from "../GetScootinButton";

const Header = () => {
  return (
    <header>
      <button className="toggle-menu-btn" type="button">
        <GiHamburgerMenu />
      </button>

      <Link to={"/"} className="home-link">
        <LogoDark aria-label="logo" />
      </Link>

      <Navigation classlist={"horizontal-navigation hide-x-navi"} />

      <GetScootinButton />
    </header>
  );
};

export default Header;
