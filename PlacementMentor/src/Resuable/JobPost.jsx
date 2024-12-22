import "./JobPost.css";
import axios from "axios";
import { FaLocationArrow, FaClock, FaDollarSign } from "react-icons/fa";

const JobPostCard = ({ job, user, flag }) => {
  const {
    jobTitle = "AI Developer",
    jobLocation = "Luxemberg , US",
    jobTimings = "9:00 AM - 4:00 PM",
    jobDescription = "This is a Dummy Description",
    interviewDetails = "Remote",
    minExperience = "2",
    maxExperience = "5",
    monthlySalary = "35000",
    preferredLanguage = "English",
    skills = "Tensorflow/Pytorch , Python",
  } = job;

  const applyHandler = () => {
    // console.log("Email", user.email);
    // console.log("job Description", job);
  };
  applyHandler();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   console.log(user);
    //   await axios.post(
    //     "http://localhost:3000/api/v1/job/apply",
    //     {
    //       resume: user.resume,
    //       jobDetails: job.jobDescription,
    //       userMail: "abhishekk09827@gmail.com",
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   console.log("User created successfully");
    //   flag();
    // } catch (err) {
    //   console.log(err);
    // }
  };
  return (
    <div className="job-post-card">
      <h2>{jobTitle}</h2>
      <div className="top-line">
        <p>
          <FaLocationArrow /> <span>{jobLocation}</span>
        </p>
        <p>
          <FaClock /> {jobTimings}
        </p>
      </div>
      <p>{jobDescription}</p>
      <p>{interviewDetails}</p>
      <div className="top-line">
        <p>
          Experience: {minExperience} - {maxExperience}
        </p>
        <p>
          {" "}
          <FaDollarSign /> <span>{monthlySalary}</span>{" "}
        </p>{" "}
      </div>

      <p>Preferred Language: {preferredLanguage}</p>
      <p>Skills: {skills}</p>
      <button onClick={handleSubmit} className="smart-but">
        Smart Apply
      </button>
    </div>
  );
};

export default JobPostCard;
