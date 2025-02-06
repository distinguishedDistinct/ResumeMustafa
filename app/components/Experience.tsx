import React from "react";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <div className="Resume flex flex-wrap gap-4 h-96 overflow-y-auto w-100p ">
      <ResumeCard
        date="2023"
        title=" Freelance Web Developer"
        desc="Created an E-commerce Website"
      ></ResumeCard>
      <ResumeCard
        date="2024"
        title=" Frontend Web Development Intern"
        desc="Learned React.Js and Next.Js"
      ></ResumeCard>
      <ResumeCard
        date="2021 - present"
        title=" Virtual Assistant"
        desc="Virtual Assistant for Valisports USA"
      ></ResumeCard>
      <ResumeCard
        date="2022 - 2024"
        title=" Software Developer"
        desc="Created a Hand Gesture Typing Mobile Application "
      ></ResumeCard>
      {/* <ResumeCard
        date="2020 - 2021"
        title=" Freelance Web Developer"
        desc="E-commerce"
      ></ResumeCard>
      <ResumeCard
        date="2020 - 2021"
        title=" Freelance Web Developer"
        desc="E-commerce"
      ></ResumeCard> */}
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

export default Experience;
