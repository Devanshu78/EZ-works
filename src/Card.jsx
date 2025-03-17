import React from "react";

const CardData = [
  {
    id: 6,
    imgSrc: "./data.png",
    title: "Data Processing",
  },
];

function Card({ imgSrc, title }) {
  return (
    <div className="bg-primary text-white p-4 rounded-sm space-y-2 w-full font-exo">
      <div className="flex items-center gap-3 xl:gap-4">
        <img className="w-12 xl:w-16" src={imgSrc} alt="Presentation Design" />
        <h1 className=" text-xl lg:text-base xl:text-3xl text-title">
          {title}
        </h1>
      </div>
      <p className="text-lg lg:text-base xl:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
        officiis?
      </p>
    </div>
  );
}

export default Card;
