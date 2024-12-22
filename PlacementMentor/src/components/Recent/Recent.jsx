import { useEffect, useState } from "react";
import axios from "axios";

import { FaLocationArrow, FaClock, FaDollarSign } from "react-icons/fa";

const Recent = () => {
  const [job, setUsers] = useState();
  useEffect(() => {
    const fetchRecentJob = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/v1/job/fetchLastAddedJob",
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "Access-Control-Allow-Origin": "http://localhost:5173/",
            },
          }
        );
        console.log(res);
        setUsers(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecentJob();
  }, []);
  return (
    <>
      {job && (
        <div className="job-post-card">
          <h2>{job.jobTitle}</h2>
          <div className="top-line">
            <p>
              <FaLocationArrow /> <span>{job.jobLocation}</span>
            </p>
            <p>
              <FaClock /> {job.jobTimings}
            </p>
          </div>
          <p>{job.jobDescription}</p>
          <p>{job.interviewDetails}</p>
          <div className="top-line">
            <p>
              Experience: {job.minExperience} - {job.maxExperience}
            </p>
            <p>
              {" "}
              <FaDollarSign /> <span>{job.monthlySalary}</span>{" "}
            </p>{" "}
          </div>

          <p>Preferred Language: {job.preferredLanguage}</p>
          <p>Skills: {job.skills}</p>
        </div>
      )}
    </>
  );
};

export default Recent;
