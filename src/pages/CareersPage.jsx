import SubHeader from "../components/SubHeader/SubHeader";
import InfoBullet from "../components/InfoBullet/InfoBullet";
import Values from "../components/Value/Values";
import Jobs from "../components/Jobs/Jobs";
// Images
import joinUs from "../assets/images/join-us.jpg";
// Patterns
import leftDownArrow from "../assets/patterns/left-downward-arrow.svg";

const CareersPage = () => {
  return (
    <>
      {/* Sub Header */}
      <SubHeader text={"careers"} />

      {/* Info Bullet */}
      <section className="component-spacing">
        <InfoBullet
          classlist={"info-bullet-container"}
          image={joinUs}
          arrowStyle={leftDownArrow}
          title={"Care to join our mission?"}
          text={
            "We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
          }
        >
          <button className="btn" type="button">
            say hallo
          </button>
        </InfoBullet>
      </section>

      {/* Why Join Us */}
      <Values title={"Why join us?"} />

      {/* Jobs */}
      <Jobs />
    </>
  );
};

export default CareersPage;
