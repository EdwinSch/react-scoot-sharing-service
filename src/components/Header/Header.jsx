import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";

import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";

import { LogoDark } from "../Logos";
import Navigation from "../Navigation/Navigation";
import GetScootinButton from "../GetScootinButton";

const Header = ({ asideIsOpen, setAsideIsOpen }) => {
  return (
    <header>
      <button
        onClick={() => setAsideIsOpen(!asideIsOpen)}
        className="toggle-menu-btn"
        type="button"
      >
        {asideIsOpen ? <IoCloseSharp /> : <IoMenuSharp />}
      </button>

      <Link
        to={"/"}
        onClick={() => setAsideIsOpen(false)}
        className="home-link"
      >
        <LogoDark aria-label="logo" />
      </Link>

      <Navigation classlist={"horizontal-navigation hide-x-navi"} />

      <GetScootinButton />
    </header>
  );
};

export default Header;
