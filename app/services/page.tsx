"use client";

import React, { useState } from "react";
import Card from "../components/Card";

const page = () => {
  const [modalData, setModalData] = useState<{
    heading: string;
    paragraph: string;
    image: string;
  } | null>(null);

  // Function to open the modal with specific card data
  const openModal = (data: {
    heading: string;
    paragraph: string;
    image: string;
  }) => {
    setModalData(data);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="mainContainer pl-20p bg-base-100 text-white pt-28">
      {modalData ? (
        <div className="Modal-Container fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="modalContent bg-white p-5 rounded-lg text-black">
            <h2 className="text-2xl mb-4 ml-auto mr-auto text-center">
              {modalData.heading}
            </h2>
            <p>{modalData.paragraph}</p>
            <img
              src={modalData.image}
              alt={modalData.heading}
              className="mt-4 mb-4 w-full max-w-md ml-auto mr-auto"
            />
            <button
              onClick={closeModal}
              className="mt-4 bg-green-400 text-black p-2 rounded align-middle"
            >
              Close Modal
            </button>
          </div>
        </div>
      ) : (
        <div className="mr-80 pr-5">
          <div className="cardsContainer flex justify-between">
            <Card
              heading="Web Development"
              paragraph="I build responsive and user-friendly websites using modern web technologies."
              serial="01"
              Modal={() =>
                openModal({
                  heading: "Web Development",
                  paragraph:
                    "I build responsive and user-friendly websites using modern web technologies.",
                  image: "./website.jpg", // Replace with actual image path
                })
              }
            />
            <Card
              heading="Software Development"
              paragraph="I develop efficient and scalable software solutions using Java, C++, and Python "
              serial="02"
              Modal={() =>
                openModal({
                  heading: "Software Development",
                  paragraph:
                    "I develop efficient and scalable software solutions using Java, C++, and Python ",
                  image: "./keyboard.jpg",
                })
              }
            />
          </div>
          <div className="cardsContainer flex justify-between">
            <Card
              heading="Website Maintenance"
              paragraph="I make dynamic updates and improvements to websites using Next.js, enhancing both frontend and backend functionality."
              serial="04"
              Modal={() =>
                openModal({
                  heading: "Website Maintenance",
                  paragraph:
                    "I make dynamic updates and improvements to websites using Next.js, enhancing both frontend and backend functionality.",
                  image: "./content.jpg", // Replace with actual image path
                })
              }
            />
            <Card
              heading="Content Writing"
              paragraph="I craft compelling written content, ranging from blog posts to social media captions, focused on engaging audiences and driving brand awareness."
              serial="03"
              Modal={() =>
                openModal({
                  heading: "Content Writing",
                  paragraph:
                    "I craft compelling written content, ranging from blog posts to social media captions, focused on engaging audiences and driving brand awareness.",
                  image: "./digital.jpg", // Replace with actual image path
                })
              }
            />
          </div>
        </div>
      )}

      <style jsx>{`
        /* Media query for screens 1300px and smaller */
        @media (max-width: 1300px) {
          .cardsContainer {
            flex-direction: column;
            justify-content: center;
            margin-right: 1.25rem; /* Adjust margin for smaller screens */
          }
        }

        @media (max-width: 400px) {
          .mainContainer {
            align-item: center;
            margin-left: auto;
            margin-right: auto;
            padding-top: 80px;
          }
        }
      `}</style>
    </div>
  );
};

export default page;
