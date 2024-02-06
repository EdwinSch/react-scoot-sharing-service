import { Link } from "react-router-dom";
import { navLinks } from "../../data";

const Navigation = ({ classlist }) => {
  return (
    <nav className={classlist}>
      {navLinks.map((link, index) => {
        return (
          <Link
            key={index}
            to={link.linkTo}
            className="link"
            aria-label={link.label}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
