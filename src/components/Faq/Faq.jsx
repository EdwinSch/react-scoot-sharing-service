import Question from "../Question/Question";
import { faqData } from "../../data";

const Faq = () => {
  let subFilter1 = faqData.filter((obj) => [1, 2, 3].includes(obj.id));
  let subFilter2 = faqData.filter((obj) => [4, 5, 6].includes(obj.id));

  return (
    <div className="faq-container">
      <h2>FAQs</h2>

      {/* Subsection 1 */}
      <section className="sub-faq-container">
        <h3>How it works</h3>
        <div className="questions-map">
          {subFilter1.map((item) => {
            return <Question key={item.id} {...item} />;
          })}
        </div>
      </section>

      {/* Subsection 2 */}
      <section className="sub-faq-container" style={{ marginTop: 60 }}>
        <h3>Safe driving</h3>
        <div className="questions-map">
          {subFilter2.map((item) => {
            return <Question key={item.id} {...item} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Faq;
