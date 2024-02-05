import Question from "../Question/Question";
import { faqData } from "../../data";

const Faq = () => {
  return (
    <div className="faq-container">
      <h2>FAQs</h2>
      <section className="sub-faq-container">
        <h3>How it works</h3>
        <div className="questions-map">
          {faqData.map((item) => {
            return <Question key={item.id} {...item} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Faq;
