import React from "react";

type InfoBlockProps = {
  label: string;
  value: string;
};

const About = () => {
  return (
    <div className=" About flex justify-between">
      <div className="flex justify-start mt-10">
        <div className="Text flex flex-col mr-5">
          {/* Information Block */}
          <InfoBlock label="Name" value="Mustafa Umar" />
          <InfoBlock label="Experience" value="4 Years" />
          <InfoBlock label="Nationality" value="Pakistani" />
          <InfoBlock label="Freelance" value="Available" />
        </div>
      </div>
      <div className="flex justify-start h-72 mt-10 text-sm">
        <div className="Text flex flex-col mr-10">
          <InfoBlock label="Phone" value="(+92) 324 5283 434" />
          <InfoBlock label="Instagram" value="mustafa_umar.jpg" />
          <InfoBlock label="Email" value="mustafaumar2001@gmail.com" />
          <InfoBlock label="Languages" value="English, Urdu" />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 750px) {
          .About {
            display: flex;
            flex-direction: column;
          }
        }
        @media (max-width: 430px) {
          .Text {
            font-size: 12px /* 14px */;
            line-height: 1.25rem /* 20px */;
          }
        }
      `}</style>
    </div>
  );
};

// Reusable InfoBlock component with types
const InfoBlock: React.FC<InfoBlockProps> = ({ label, value }) => {
  return (
    <div className="flex justify-start mb-5">
      <p className="text-2xs leading-normal opacity-70 mr-3">{label}</p>
      <h3 className="text-2xs leading-normal font-bold">{value}</h3>
    </div>
  );
};

export default About;
