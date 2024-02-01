import InfoBullet from "../components/InfoBullet/InfoBullet";
import LearnMoreButton from "../components/LearnMoreButton";
// Images
import imgTelemetry from "../assets/images/telemetry.jpg";
import imgCity from "../assets/images/near-you.jpg";
import imgPayment from "../assets/images/payments.jpg";
// Patterns
import leftDownArrow from "../assets/patterns/left-downward-arrow.svg";
import rightArrow from "../assets/patterns/right-arrow.svg";

const LandingPage = () => {
  return (
    <>
      <section className="info-summary-container">
        <InfoBullet
          classlist={"info-bullet-container"}
          image={imgTelemetry}
          arrowStyle={leftDownArrow}
        >
          <LearnMoreButton />
        </InfoBullet>

        <InfoBullet
          classlist={"info-bullet-container inverse"}
          image={imgCity}
          arrowStyle={rightArrow}
        >
          <LearnMoreButton />
        </InfoBullet>

        <InfoBullet
          classlist={"info-bullet-container"}
          image={imgPayment}
          arrowStyle={leftDownArrow}
        >
          <LearnMoreButton />
        </InfoBullet>
      </section>
    </>
  );
};

export default LandingPage;
