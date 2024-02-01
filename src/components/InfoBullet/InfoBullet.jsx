import singleCircle from "../../assets/patterns/circle.svg";

const InfoBullet = ({ classlist, image, arrowStyle, children }) => {
  return (
    <article className={classlist}>
      <div className="info-wrapper">
        <h2>Easy to use riding telemetry</h2>
        <p className="body-text">
          The Scoot app is available with riding telemetry. This means it can
          show you your average speed, how long you've been using the scooter,
          your traveling distance, and many more things all in an easy to use
          app.
        </p>
        {children}
      </div>
      <img className="info-bullet-img" src={image} alt="stock photo" />
      <img
        className="arrow-img"
        src={arrowStyle}
        alt="pattern"
        aria-hidden="true"
      />
      <img
        className="single-circle-img"
        src={singleCircle}
        alt="pattern"
        aria-hidden="true"
      />
    </article>
  );
};

export default InfoBullet;
