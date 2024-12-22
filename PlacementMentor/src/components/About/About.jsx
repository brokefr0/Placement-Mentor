import "./About.css";
import Spline from "@splinetool/react-spline";
import { useRef } from "react";

const About = () => {
  const can = useRef(null);
  return (
    <div className="containera">
      <div className="headline">
        <div className="head">
          <h1>About Placement Mentor</h1> {/* Updated the title */}
        </div>
        <div className="model">
          <Spline
            scene="https://prod.spline.design/se8tMtBCFL4R1Myi/scene.splinecode"
            ref={can}
          />
        </div>
      </div>
      <div className="desc-ab">
        <p>
          Welcome to Placement Mentor – Your Gateway to Career Success! We are dedicated to providing an all-in-one platform designed to equip students and professionals with the tools they need for successful placements.
        </p>
        <br />
        <p>
          At Placement Mentor, we focus on guiding you through your career journey with our range of services, including:
          <ul>
            <li><strong>Project Postings:</strong> Build real-world projects to enhance your portfolio and stand out to potential employers.</li>
            <li><strong>Mock Interviews:</strong> Prepare for interviews with our simulated mock interview sessions, designed to boost your confidence and refine your skills.</li>
            <li><strong>Aptitude Training:</strong> Sharpen your analytical and problem-solving abilities with dedicated aptitude tests and resources.</li>
            <li><strong>Coding Practice:</strong> Practice coding through hands-on challenges that help you improve your coding skills and prepare for technical rounds.</li>
          </ul>
          We are committed to empowering individuals through personalized learning experiences, creating a community where everyone can achieve their placement goals.
        </p>
        <br />
        <p>
          Join us at Placement Mentor to kickstart your career journey and unlock the tools to succeed in the competitive world of placements. Together, we’ll help you develop your skills, tackle challenges, and land your dream job.
        </p>
      </div>
    </div>
  );
};

export default About;
