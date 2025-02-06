import { MouseEventHandler, useState } from "react";

const Card = (props: {
  Modal: MouseEventHandler;
  heading: string;
  paragraph: string;
  serial: string;
}) => {
  return (
    <div className="card mb-20">
      <div className="transition ease-in-out delay-100  hover:text-green-600 duration-300 ">
        <div className="flex justify-between">
          <h1 className="text-5xl mr-16">{props.serial}</h1>
          <div>
            <button
              className="  -rotate-45 text-black text-3xl p-2.5 px-5  bg-white rounded-full transition ease-in-out delay-150 hover:bg-green-600 hover:-rotate-90"
              onClick={props.Modal}
            >
              ↓
            </button>
          </div>
        </div>
        <h1 className="text-3xl font-bold my-5">{props.heading}</h1>
      </div>
      <p className="text-xs w-80 leading-normal opacity-70">
        {props.paragraph}
      </p>

      <div className="opacity-50 border-b border-gray-500 mt-4"></div>
      <style jsx>{`
        @media (max-width: 400px) {
          .cardsContainer {
            flex-direction: column;
            margin-right: 1.25rem;
          }
          p {
            width: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default Card;
