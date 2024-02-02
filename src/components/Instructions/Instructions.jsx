import { instructionsData } from "../../data";

const Instructions = () => {
  return (
    <section className="instructions-component-container">
      <div className="ghost-element" aria-hidden={true}></div>
      {instructionsData.map((item) => {
        return (
          <article key={item.id} className="instructions-wrapper">
            <img src={item.icon} className="instruction-icon" alt="icon" />
            <div className="instruction-txt-wrapper">
              <h4>{item.heading}</h4>
              <p className="body-text instruction-txt">{item.text}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Instructions;
