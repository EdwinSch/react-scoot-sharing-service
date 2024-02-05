import { navLinks } from "../../data";
import { Link } from "react-router-dom";
import GetScootinButton from "../GetScootinButton";

const SideNav = ({ asideIsOpen, setAsideIsOpen }) => {
  return (
    <aside className={asideIsOpen ? null : "hide-aside"}>
      {/* Nav links */}
      <nav className="aside-navi-container">
        {navLinks.map((link, index) => {
          return (
            <Link
              key={index}
              to={link.linkTo}
              onClick={() => setAsideIsOpen(false)}
              className="aside-link"
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Nav links */}
      <GetScootinButton />
    </aside>
  );
};

export default SideNav;
