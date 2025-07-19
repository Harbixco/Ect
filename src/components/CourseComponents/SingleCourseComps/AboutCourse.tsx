import { useState } from "react";
import H1 from "../H1";

export default function AboutCourse() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <H1 text="about course" />
      <p className={isExpanded ? "" : "expandDetails"}>
        Welcome to the ultimate Web Development Bootcamp designed for 2024! This
        comprehensive course is your gateway to mastering the latest web
        technologies and building stunning, responsive websites from scratch. In
        this bootcamp, you will embark on a journey starting with the
        fundamentals of web development. You'll gain a solid foundation in HTML,
        CSS, and JavaScript, laying the groundwork for creating dynamic and
        interactive web pages. As you progress, you'll delve deeper into
        frontend development, exploring popular frameworks like React and Vue.js
        to build modern user interfaces. One of the highlights of this bootcamp
        is the focus on full-stack development. By combining your frontend and
        backend skills, you'll gain the ability to develop and deploy fully
        functional web applications. Responsive design techniques will also be
        covered extensively to ensure your websites look great and perform well
        across various devices. Why choose this bootcamp? You'll have the
        opportunity to work on hands-on projects that simulate real-world
        scenarios, giving you practical experience and boosting your confidence
        as a developer. Our experienced instructors are passionate about web
        development and are committed to providing you with expert guidance
        throughout the course. Career support is another key aspect of our
        bootcamp. Moreover, you'll have the chance to connect with fellow
        learners in our supportive online community, expanding your network and
        learning from peers.
      </p>
      <button
        className="cursor-pointer text-sm font-semibold lowercase text-secondary"
        onClick={toggleExpand}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
}
