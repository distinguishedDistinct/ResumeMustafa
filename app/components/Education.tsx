import React from "react";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="Resume flex flex-wrap gap-4 h-96 overflow-y-auto  ">
      <ResumeCard
        date="2024"
        title=" Web Development"
        desc="Hexler Tech, Islamabad"
      ></ResumeCard>
      <ResumeCard
        date="2020-2024"
        title=" Bachelor of Science in Computer Science"
        desc="FURC, Rawalpindi"
      ></ResumeCard>
      <ResumeCard
        date="2018 - 2020"
        title=" Higher Secondary School Certificate"
        desc="PGCAPC, Rawalpindi"
      ></ResumeCard>
      <ResumeCard
        date="2016 - 2018"
        title=" Secondary School Certificate"
        desc="GSR, Rawalpindi"
      ></ResumeCard>

      <ResumeCard
        date="2020 - 2021"
        title=" Freelance Web Developer"
        desc="E-commerce"
      ></ResumeCard>
      <ResumeCard
        date="2020 - 2021"
        title=" Freelance Web Developer"
        desc="E-commerce"
      ></ResumeCard>

      <style jsx>{`
        @media (max-width: 830px) {
          .Resume {
            flex-direction: column;
            overflow: scroll;
            height: 200px;
          }
        }
        @media (max-width: 580px) {
          .Resume {
            overflow: scroll;
            height: 300px;
            margin-left: 0px;
          }
        }
      `}</style>
    </div>
  );
};

export default Education;
