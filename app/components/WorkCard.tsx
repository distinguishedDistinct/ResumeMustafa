import React from "react";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

const WorkCard = (props: {
  heading: string;
  paragraph: string;
  serial: string;
  tools: string;
}) => {
  return (
    <div className="card ">
      <div className="transition ease-in-out delay-100  hover:text-green-400 duration-300 ">
        <div className="flex">
          <h2 className="text-5xl ">{props.serial}</h2>
        </div>
        <h1 className="text-3xl font-bold my-5">{props.heading}</h1>
      </div>
      <p className="text-xs w-96 leading-normal opacity-70">
        {props.paragraph}
      </p>
      <p className="text-sm font-bold mt-5 text-green-400">{props.tools}</p>

      <div className="opacity-50 border-b border-gray-500 my-4 "></div>
      <div className="flex">
        <button className=" mr-5 w-11 h-11 -rotate-120deg text-3xl bg-gray-800 rounded-full transition ease-in-out delay-150 hover:bg-white hover:-rotate-90 hover:text-black">
          ↓
        </button>
        <a
          href="https://github.com/distinguishedDistinct"
          className=" p-2 text-3xl bg-gray-800 rounded-full transition ease-in-out delay-150 hover:bg-white hover:text-black"
        >
          <FaGithub />
        </a>
      </div>
      <style jsx>{`
        @media (max-width: 400px) {
          .card {
            margin-left: auto;
            margin-right: auto;
            align-items: center;
          }
          h1 {
            font-size: 25px;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
          h2 {
            margin-left: auto;
            margin-right: auto;
            font-size: 40px;
            font-weight: bold;
          }
          p {
            text-align: center;
            width: 280px;
          }
        }
      `}</style>
    </div>
  );
};

export default WorkCard;
