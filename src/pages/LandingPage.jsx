import Hero from "../components/Hero/Hero";
import Instructions from "../components/Instructions/Instructions";
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
      {/* Hero */}
      <Hero />

      {/* Instructions */}
      <Instructions />

      {/* Info Bullets */}
      <section className="component-spacing">
        {/* Bullet 1 */}
        <InfoBullet
          classlist={"info-bullet-container"}
          image={imgTelemetry}
          arrowStyle={leftDownArrow}
          title={"Easy to use riding telemetry"}
          text={
            "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
          }
        >
          <LearnMoreButton />
        </InfoBullet>
        ={/* Bullet 2 */}
        <InfoBullet
          classlist={"info-bullet-container inverse"}
          image={imgCity}
          arrowStyle={rightArrow}
          title={"Coming to a city near you"}
          text={
            "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
          }
        >
          <LearnMoreButton />
        </InfoBullet>
        {/* Bullet 3 */}
        <InfoBullet
          classlist={"info-bullet-container"}
          image={imgPayment}
          arrowStyle={leftDownArrow}
          title={"Zero hassle payments"}
          text={
            "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
          }
        >
          <LearnMoreButton />
        </InfoBullet>
      </section>
    </>
  );
};

export default LandingPage;
