import "./Feature.css";
import IM from "/ai_sc.jpg";
import BK from "/block.jpg";
import CR from "/CR.jpg";
import EM from "/EM.jpg";
import IB from "/infobot.jpg";
import { useState } from "react";

const Feature = () => {
  const [ind, setIndex] = useState(1);

  const featureHandler = (e) => {
    const d = e.target.getAttribute("data");
    console.log(d);

    setIndex(d);
    console.log(ind);
  };

  const dummyDataList = [
    {
      id: 0,
      imageUrl: "",
      description: " ",
    },
    {
      id: 1,
      imageUrl: IM, // Example image for "Project Uploading"
      description:
        "This feature allows users to upload their project portfolios, showcasing their work in an organized and professional manner. It ensures the seamless upload of various project types and provides an easy way to share with potential employers or collaborators.",
    },
    {
      id: 2,
      imageUrl: EM, // Example image for "Amplitude Assessment"
      description:
        "The Amplitude Assessment tool helps candidates assess their skills through a series of analytical and logical questions. It helps employers and candidates gauge the applicant's abilities and ensure they match the job requirements effectively.",
    },
    {
      id: 3,
      imageUrl: CR, // Example image for "Coding Round"
      description:
        "The Coding Round feature enables candidates to participate in coding challenges designed to test their technical abilities. It provides an interactive environment for candidates to demonstrate their coding skills, with real-time feedback and scoring.",
    },
    {
      id: 4,
      imageUrl: BK, // Example image for "Mock Interview"
      description:
        "This Mock Interview feature simulates real-world interview scenarios, allowing candidates to practice and hone their interview skills. It provides feedback on performance, helping users improve and prepare for real interviews.",
    },
  ];

  return (
    <div className="containerf">
      <div className="textf">
        <div className="sm">
          <span>Features </span>
        </div>
        <div className="headtxt">What we are here to offer.</div>
        <div className="list">
          <div className="el">
            <span className="num">01</span>
            <span className="txt" data={1} onClick={featureHandler}>
              Project Uploading
            </span>
            <span className="sym">{">"}</span>
          </div>
        </div>
        <div className="list">
          <div className="el">
            <span className="num">02</span>
            <span className="txt" data={2} onClick={featureHandler}>
              Aplitude Assessment
            </span>
            <span className="sym">{">"}</span>
          </div>
        </div>{" "}
        <div className="list">
          <div className="el">
            <span className="num">03</span>
            <span className="txt" data={3} onClick={featureHandler}>
              Coding Round
            </span>
            <span className="sym">{">"}</span>
          </div>
        </div>{" "}
        <div className="list">
          <div className="el">
            <span className="num">04</span>
            <span className="txt" data={4} onClick={featureHandler}>
              Mock Interview
            </span>
            <span className="sym">{">"}</span>
          </div>
        </div>
      </div>
      <div className="comp">
        <div className="im">
          <img src={dummyDataList[ind].imageUrl} alt="" />
        </div>
        <div className="desc">
          <div className="desc-t">{dummyDataList[ind].description}</div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
