import { Link } from "react-router-dom";
import { LogoLight } from "../Logos";
import Navigation from "../Navigation/Navigation";
import { socialLinks } from "../../data";

const Footer = () => {
  return (
    <footer>
      <Link to={"/"} className="home-link">
        <LogoLight aria-label="logo" />
      </Link>

      <Navigation classlist={"horizontal-navigation"} />

      <nav className="social-links-container">
        {socialLinks.map((link, index) => {
          return (
            <a
              key={index}
              href={link.url}
              aria-label={link.label}
              target="_blank"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          );
        })}
      </nav>
    </footer>
  );
};

export default Footer;
