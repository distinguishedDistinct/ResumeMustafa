import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Socials = () => {
  return (
    <div>
      <div className="Socials flex">
        <FaPhone
          size={60}
          className="text-green-400 p-2 bg-gray-800 hover:text-white mr-7"
        />
        <div className="flex flex-col">
          <p className="text-xs w-80 leading-normal opacity-80">Phone</p>
          <h1 className="text-xl w-80 leading-normal font-bold">
            (+92) 324 5283 434
          </h1>
        </div>
      </div>
      <div className="Socials flex my-7">
        <FaEnvelope
          size={60}
          className="text-green-400 p-2 bg-gray-800 hover:text-white mr-7"
        />
        <div className="flex flex-col">
          <p className="text-xs w-80 leading-normal opacity-80">Email</p>
          <h1 className="text-xl w-80 leading-normal font-bold">
            mustafaumar2001@gmail.com
          </h1>
        </div>
      </div>
      <div className="Socials flex my-7">
        <FaMapMarkerAlt
          size={60}
          className="text-green-400 p-2 bg-gray-800 hover:text-white mr-7"
        />
        <div className="flex flex-col">
          <p className="text-xs w-80 leading-normal opacity-80">Address</p>
          <h1 className="text-xl w-80 leading-normal font-bold">
            Rawalipindi, Pakistan
          </h1>
        </div>
      </div>
      <style jsx>
        {`
          @media (max-width: 450px) {
            .Socials {
              flex-direction: column;
            }
            h1 {
              font-size: 15px;
            }
            p {
              margin-top: 15px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Socials;
