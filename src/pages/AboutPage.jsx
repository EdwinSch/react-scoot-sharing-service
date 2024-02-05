import SubHeader from "../components/SubHeader/SubHeader";
import InfoBullet from "../components/InfoBullet/InfoBullet";
import Values from "../components/Value/Values";
import Faq from "../components/Faq/Faq";
// Images
import imgDigitalEra from "../assets/images/digital-era.jpg";
import imgBetterLiving from "../assets/images/better-living.jpg";
// Patterns
import leftUpArrow from "../assets/patterns/left-upward-arrow.svg";
import rightArrow from "../assets/patterns/right-arrow.svg";

const AboutPage = () => {
  return (
    <>
      {/* Subheader */}
      <SubHeader text={"about"} />

      {/* Info Bullets */}
      <section>
        {/* Bullet 1 */}
        <InfoBullet
          classlist={"info-bullet-container"}
          image={imgDigitalEra}
          arrowStyle={leftUpArrow}
          title={"Mobility for the digital era"}
          text={
            "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
          }
        />
        {/* Bullet 2 */}
        <InfoBullet
          classlist={"info-bullet-container inverse"}
          image={imgBetterLiving}
          arrowStyle={rightArrow}
          title={"Better urban living"}
          text={
            "We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
          }
        />
      </section>

      {/* Our values */}
      <Values title={"Our values"} />

      {/* FAQs */}
      <Faq />
    </>
  );
};

export default AboutPage;
