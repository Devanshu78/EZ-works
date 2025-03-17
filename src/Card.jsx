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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="bg-primary text-white p-4 rounded-sm space-y-2 w-full">
        <div className="flex items-center gap-2 xl:gap-4">
          <img
            className="w-12 xl:w-16"
            src="./pres.png"
            alt="Presentation Design"
          />
          <h1 className=" text-xl lg:text-base  xl:text-2xl text-title">
            Presentation <br /> Design
          </h1>
        </div>
        <p className="text-lg lg:text-base xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          officiis?
        </p>
      </div>
      <div className="bg-primary text-white p-4 rounded-sm space-y-2 w-full">
        <div className="flex items-center gap-2 xl:gap-4">
          <img
            className="w-12 xl:w-16"
            src="./videos.png"
            alt=" Audio-Visual Production"
          />
          <h1 className=" text-xl  lg:text-base  xl:text-2xl text-title">
            Audio - Visual <br /> Production
          </h1>
        </div>
        <p className="text-lg lg:text-base xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          officiis?
        </p>
      </div>
      <div className="bg-primary text-white p-4 rounded-sm space-y-2 w-full">
        <div className="flex items-center gap-2 xl:gap-4">
          <img
            className="w-12 xl:w-16"
            src="./translation.png"
            alt=" Translation Services"
          />
          <h1 className=" text-xl lg:text-base  xl:text-2xl text-title">
            Translation <br /> Services
          </h1>
        </div>
        <p className=" text-lg lg:text-base xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          officiis?
        </p>
      </div>
      <div className="bg-primary text-white p-4 rounded-sm space-y-2 w-full">
        <div className="flex items-center gap-2 xl:gap-4">
          <img
            className="w-12 xl:w-16"
            src="./graphic.png"
            alt=" Graphic Design"
          />
          <h1 className=" text-xl lg:text-lg   xl:text-2xl  text-title">
            Graphic <br /> Design
          </h1>
        </div>
        <p className="text-lg lg:text-base xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          officiis?
        </p>
      </div>
      <div className="bg-primary text-white p-4 rounded-sm space-y-2 w-full">
        <div className="flex items-center gap-2 xl:gap-4">
          <img
            className="w-12 xl:w-16"
            src="./research.png"
            alt="  Research & Analysis"
          />
          <h1 className=" text-xl lg:text-base  xl:text-2xl  text-title break-words">
            Research & <br /> Analysis
          </h1>
        </div>
        <p className="text-lg lg:text-base xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          officiis?
        </p>
      </div>
      <div className="bg-primary text-white p-4 rounded-sm space-y-2 w-full">
        <div className="flex items-center gap-2 xl:gap-4">
          <img
            className="w-[3em] xl:w-[4em]"
            src="./data.png"
            alt=" Data Processing"
          />
          <h1 className=" text-xl  lg:text-base  xl:text-2xl  text-title">
            Data <br /> Processing
          </h1>
        </div>
        <p className="text-lg lg:text-base xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          officiis?
        </p>
      </div>
    </div>
  );
}

export default Card;
