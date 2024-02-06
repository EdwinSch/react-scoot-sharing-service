import { Link } from "react-router-dom";

const LearnMoreButton = () => {
  return (
    <Link to="/about" className="link" aria-label="about">
      <button className="btn" type="button">
        learn more
      </button>
    </Link>
  );
};

export default LearnMoreButton;
