import React from "react";

const Banner = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between bg-base-200 mb-20">
      <div className="flex justify-center lg:w-2/4 w-full">
        <img
          src="../../../../public/Images/Nishi2.png"
          className="rounded-lg w-full lg:w-2/3"
          alt="Moriyam Mohona"
        />
      </div>
      <div className="text-center lg:text-left w-full lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl lg:text-5xl mb-5">Hello World, I'm</h1>
        <h1 className="text-6xl font-bold text-yellow-200 mb-10">
          Moriyam Mohona
        </h1>
        <p className="text-2xl lg:text-3xl p-3">Front-End Developer</p>
        <button className="btn btn-outline w-2/4 border-yellow-200 border-2 text-yellow-200 text-xl lg:text-xl mt-10 font-light">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Banner;
