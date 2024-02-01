import { Link } from "react-router-dom";

const LearnMoreButton = () => {
  return (
    <Link to="/about" className="link">
      <button className="btn">learn more</button>
    </Link>
  );
};

export default LearnMoreButton;
