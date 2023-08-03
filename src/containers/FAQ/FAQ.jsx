import React, { useState } from 'react';
import './faq.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from  '@fortawesome/free-solid-svg-icons'



//In web design, an accordion is a type of menu that displays a list of headers stacked on top of one another. 
//When clicked on (or triggered by a keyboard interaction or screen reader), 
//these headers will either reveal or hide associated content.

const accordionData = [
  {
    question: (
      <><FontAwesomeIcon icon={faCircleQuestion} className="accordion-icon" />Mi az az RPA (Robotic Process Automation)?</>
      ),
    answer: 'RPA is a process in which a software bot uses a combination of automation, computer vision, and machine learning to automate repetitive large-scale tasks that are rule-based and triggered. \nThe software is intended to execute repetitive tasks across applications and systems. \nThe software learns a workflow with multiple steps and applications.',
  },
  {
    question: (
      <><FontAwesomeIcon icon={faCircleQuestion} className="accordion-icon" />Milyen problémák oldhatók meg az RPA segítségével?</>
      ),
    answer: 'Productivity increases. \nRPA is known for delivering efficiency gains that are great because organizations always strive to do more with less, become leaner, more resilient, and increase profitability. \nImproving the quality of customer service. \nWhen work gets done faster with RPA robots, it reduces customer effort, gets the job done right the first time, and shifts work faster, improving customer experience (for both external and internal customers).',
  },
  {
    question: (
      <><FontAwesomeIcon icon={faCircleQuestion} className="accordion-icon" />Mennyire megbízható az RPA technológia?</>
      ),
    answer: 'RPA is inherently reliable as it reduces the chance of human error. \nSince every transaction is regulated by rule-based logic, there is no possibility of error or rejection. \nNot to mention the built-in audit trail recording who did what, where, and for how long. \nEvery action is recorded from start to finish. \nIf any problems arise, these logs make it much easier to find the source of the problem (and identify a solution).',
  },
  {
    question: (
      <><FontAwesomeIcon icon={faCircleQuestion} className="accordion-icon" />Hogyan automatizálhatom az ügyfélkiszolgálást?</>
      ),
    answer: 'The cost of an RPA implementation is influenced by the number of software components and bots that make up your deployment. \nOn average, the cost of one bot (or unit) is usually between $5,000 and $15,000. \nStraightforward systems can be extended with RPA tools very quickly. \nAs a rule, it takes as little as two weeks, while more complex workflows can take two or three months.',
  },
  {
    question: (
      <><FontAwesomeIcon icon={faCircleQuestion} className="accordion-icon" />Mennyi ideig tart és mennyibe kerül egy robot kifejlesztése?</>
      ),
    answer: 'There is an uncountable number of industries where you can use RPA tools. \nThe most obvious include:Banking, Customer Care, Finance, Healthcare, Insurance, Retail, Telecommunications',
  },
  {
    question: (
      <><FontAwesomeIcon icon={faCircleQuestion} className="accordion-icon" />Mire használható az RPA?</>
      ),
    answer: 'While RPA is used to collaborate with people by automating repetitive processes (assisted automation), AI is used for Intelligent Automation which replaces human labor and automates end-to-end automation (unattended automation).\n AI also comes as an aid in RPA, as a solution to more complex problems with unstructured data or human decisions.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };


  return (
    <div className="accordion">
      <span>Gyakran Ismételt Kérdések</span>
            {accordionData.map((item, index) => (
        <div
          className={`accordion-item ${index === activeIndex ? 'active' : ''}`}
          key={index}
          onClick={() => handleAccordionClick(index)}
        >
          <div className="accordion-question">{item.question}</div>
          {index === activeIndex && (
            <div className="accordion-answer">{item.answer}</div>
          )}
        </div>
      ))}

    </div>
  );
};

export default FAQ;
