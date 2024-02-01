import GetScootinButton from "../GetScootinButton";
import lineImg from "../../assets/patterns/line.svg";
import rightArrow from "../../assets/patterns/right-arrow.svg";
import whiteCircles from "../../assets/patterns/white-circles.svg";

const Hero = () => {
  return (
    <section className="hero-container">
      <h1>Scooter sharing made simple</h1>
      <p className="body-text hero-txt">
        Scoot takes the hassle out of urban mobility. Our bikes are placed in
        convenient locations in each of our cities. Use our app to locate the
        nearest bike, unlock it with a tap, and you’re away!
      </p>
      <div className="btn-wrapper">
        <GetScootinButton />
      </div>
      <img
        className="line-img-hero"
        src={lineImg}
        alt="pattern"
        aria-hidden="true"
      />
      <img
        className="arrow-img-hero"
        src={rightArrow}
        alt="pattern"
        aria-hidden="true"
      />
      <img
        className="circles-img-hero"
        src={whiteCircles}
        alt="pattern"
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;
