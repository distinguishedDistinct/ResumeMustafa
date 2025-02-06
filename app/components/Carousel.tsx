import React from "react";

const Carousel = (props: {
  slides: string[];
  currentSlide: number;
  nextSlide: () => void;
  prevSlide: () => void;
}) => {
  return (
    <div className="carousel w-full h-full overflow-hidden">
      <div className="flex flex-col">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${props.currentSlide * 100}%)` }}
        >
          {props.slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={slide}
                alt={`Slide ${index}`}
                className="w-full h-80 object-cover"
              />
            </div>
          ))}
        </div>

        <div className="Buttons flex justify-end mt-2">
          <button
            onClick={props.prevSlide}
            className="btn bg-[rgb(8,213,132)] rounded-none text-black hover:bg-white"
          >
            ❮
          </button>
          <button
            onClick={props.nextSlide}
            className="btn bg-[rgb(8,213,132)] rounded-none mx-3 text-black hover:bg-white"
          >
            ❯
          </button>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 400px) {
          img {
            width: 300px;
            height: 200px;
            margin-left: auto;
            margin-right: auto;
          }
          .Buttons {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel;
