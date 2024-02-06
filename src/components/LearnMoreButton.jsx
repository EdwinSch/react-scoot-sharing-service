import { Link } from "react-router-dom";

const LearnMoreButton = () => {
  return (
    <Link to="/about" className="btn link" aria-label="learn more">
      learn more
    </Link>
  );
};

export default LearnMoreButton;
