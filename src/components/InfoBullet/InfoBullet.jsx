import singleCircle from "../../assets/patterns/circle.svg";

const InfoBullet = ({
  classlist,
  image,
  arrowStyle,
  title,
  text,
  children,
}) => {
  return (
    <article className={classlist}>
      <div className="info-wrapper">
        <h2>{title}</h2>
        <p className="body-text">{text}</p>
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
