import { Link } from "react-router-dom";
import { navLinks } from "../../data";
import logo from "../../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header>
      <button className="toggle-menu-btn" type="button">
        <GiHamburgerMenu />
      </button>

      <Link to={"/"} className="home-link">
        <img src={logo} alt="logo" className="logo-img" />
      </Link>

      <nav>
        {navLinks.map((link, index) => {
          return (
            <Link key={index} to={link.linkTo} className="link">
              {link.label}
            </Link>
          );
        })}
      </nav>

      <button className="btn header-btn">get scootin</button>
    </header>
  );
};

export default Header;
