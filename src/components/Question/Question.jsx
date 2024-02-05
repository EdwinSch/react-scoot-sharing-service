import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const Question = ({ id, question, answer }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <article className="question-wrapper" onClick={() => setToggle(!toggle)}>
      <div className="question-header">
        <h4>{question}</h4>
        {toggle ? (
          <FaChevronUp className="faq-toggle-btn" />
        ) : (
          <FaChevronDown className="faq-toggle-btn" />
        )}
      </div>

      {toggle ? (
        <p className="question-body">{answer}</p>
      ) : (
        <p className="question-body hide-answer">{answer}</p>
      )}
    </article>
  );
};

export default Question;
