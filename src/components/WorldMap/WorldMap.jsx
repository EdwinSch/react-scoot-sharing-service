import mapImg from "../../assets/images/world-map-mobile.png";

const WorldMap = () => {
  return (
    <div className="locations-container">
      {/* Map */}
      <img src={mapImg} className="map-img" alt="scoot world locations" />

      {/* Locations */}
      <div className="cities-container">
        <p className="city">new york</p>
        <p className="city">london</p>
        <p className="city">jakarta</p>
        <p className="city">yokohama</p>
      </div>

      {/* Info */}
      <div className="locations-info-wrapper">
        <h2>Your City Not Listed?</h2>
        <p className="body-text">
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>
        <button className="btn" type="button">
          message us
        </button>
      </div>
    </div>
  );
};

export default WorldMap;
