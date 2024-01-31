import whiteCircles from "../../assets/patterns/white-circles.svg";

const SubHeader = ({ text }) => {
  return (
    <section className="subheader-container">
      <h1 style={{ color: "#ffffff", textTransform: "capitalize" }}>{text}</h1>
      <img src={whiteCircles} alt="pattern" aria-hidden="true" />
    </section>
  );
};

export default SubHeader;
