import { Link } from "react-router-dom";
import { navLinks } from "../../data";

const Navigation = () => {
  return (
    <nav className="horizontal-navigation">
      {navLinks.map((link, index) => {
        return (
          <Link key={index} to={link.linkTo} className="link">
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
