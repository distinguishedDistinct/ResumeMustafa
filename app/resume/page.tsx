"use client";
import { useState } from "react";
import ResumeCard from "../components/ResumeCard";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skill from "../components/Skill";
import About from "../components/About";

// Define a type for the sections
type Section = "experience" | "education" | "skills" | "about";

const Page = () => {
  const [activeSection, setActiveSection] = useState<Section>("experience"); // Default to experience section

  const handleSectionClick = (section: Section) => {
    setActiveSection(section);
  };

  const getButtonStyle = (section: Section) =>
    activeSection === section
      ? "bg-green-600 text-black transition duration-300 ease-in-out"
      : "bg-gray-800 text-white transition duration-300 ease-in-out";

  return (
    <div className="mainContainer pl-20p bg-base-100 text-white ">
      <div className="Main flex justify-start pt-28 ml-1.5 mr-32 pr-3 mb-20 ">
        <div className="Hiring flex flex-col justify-start w-30p">
          <div>
            <h1 className="text-4xl">
              <b>Why Hire Me?</b>
            </h1>
          </div>
          <div className="my-6">
            <p className="text-xs leading-normal opacity-70 w-50p">
              I bring a versatile skill set in both web development and graphic
              design.
            </p>
          </div>
          <div className="Buttons">
            <div>
              <button
                className={`rounded-md w-80p py-2 ${getButtonStyle(
                  "experience"
                )}`}
                onClick={() => handleSectionClick("experience")}
              >
                Experience
              </button>
            </div>
            <div>
              <button
                className={`rounded-md w-80p my-6 py-2 ${getButtonStyle(
                  "education"
                )}`}
                onClick={() => handleSectionClick("education")}
              >
                Education
              </button>
            </div>
            <div>
              <button
                className={`rounded-md w-80p py-2 ${getButtonStyle("skills")}`}
                onClick={() => handleSectionClick("skills")}
              >
                Skills
              </button>
            </div>
            <div>
              <button
                className={`rounded-md w-80p my-6 py-2 ${getButtonStyle(
                  "about"
                )}`}
                onClick={() => handleSectionClick("about")}
              >
                About me
              </button>
            </div>
          </div>
        </div>

        <div className="Experiences w-60p">
          <h1 className="text-4xl">
            <b>
              {activeSection === "experience"
                ? "My Experience"
                : activeSection === "education"
                ? " My Education"
                : activeSection === "about"
                ? "About Me"
                : "My Skills"}
            </b>
          </h1>
          <p className="text-xs leading-normal opacity-70 w-60p my-3">
            I bring a strong background in web development and design, combining
            creativity with practical technical solutions.
          </p>

          {/* Conditionally render based on active section */}
          <div className="">
            {activeSection === "experience" && <Experience />}
            {activeSection === "education" && <Education />}
            {activeSection === "skills" && (
              <p>
                <Skill />
              </p>
            )}
            {activeSection === "about" && <About />}
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 1151px) {
        .mainContainer{
        pl-20p
        
        }
          .Main {
            flex-direction: column;
            align-items: center;
            width:auto
          }
          .Hiring{
          width: 100%;
          }
          .Experiences{
            width: 100%;

          }
            @media (max-width: 650px) {
            
            .Main{
            margin-right: 50px
            }
            .Experiences{
 
            }
      }
             @media (max-width: 430px) {
            .Main{
                padding-top: 30px
                          }
             .Buttons{
             display: flex;
             flex-direction: column;
             
            
             width: 100%;
             margin-left: 30px;
             margin-right: auto;
             }
             h1{
             text-align: center;
             margin-left: auto;
             margin-right: auto;
             }
             p{
                width: 200px;
                text-align: center;
                margin-left: auto;
             margin-right: auto;
             }
             }

      `}</style>
    </div>
  );
};

export default Page;
