import { values } from "../../data";

const Values = ({ title }) => {
  return (
    <section className="values-container">
      {/* Title */}
      <h2>{title}</h2>

      {/* Values */}
      <div className="values-wrapper">
        {values.map((item) => {
          return (
            <article key={item.id} className="value">
              <img className="value-img" src={item.img} alt="stock photo" />
              <div className="number-placeholder">
                <p>0{item.id}</p>
              </div>
              <h4>{item.value}</h4>
              <p className="body-text">{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Values;
