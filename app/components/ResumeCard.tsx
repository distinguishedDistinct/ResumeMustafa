import React from "react";

const ResumeCard = (props: { date: string; title: string; desc: string }) => {
  return (
    <div className="card bg-gray-800 pl-8 pr-8 pb-6 pt-6 w-40p">
      <div className="ml-auto mr-auto">
        <h1 className="text-sm text-green-600 mt-2 font-bold">{props.date}</h1>
        <h1 className="text-md font-bold my-2">{props.title}</h1>
        <p className="text-2xs leading-normal opacity-70 mb-2">
          <span className="text-green-600 text-2xl font-bold">.</span>
          {props.desc}
        </p>
      </div>
      <style jsx>{`
        @media (max-width: 540px) {
          .card {
            width: 80%;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumeCard;
