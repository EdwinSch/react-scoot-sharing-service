import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const Question = ({ id, question, answer }) => {
  return (
    <article className="question-wrapper">
      <div className="question-header">
        <h4>{question}</h4>
        <FaChevronDown className="faq-toggle-btn" />
      </div>
      <p className="question-body">{answer}</p>
    </article>
  );
};

export default Question;
