// import React from "react";
import Lottie from "lottie-react";
import Animation from "../../../assets/Animation - 1720090988798.json";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between bg-base-200 mb-10 p-5">
      <div className="flex justify-center w-full">
        <Lottie animationData={Animation} loop={true} />
      </div>
      <div className="text-center lg:text-left w-full flex flex-col justify-center mt-10 lg:mt-0">
        <h1 className="text-2xl lg:text-4xl mb-5">Hello World, I'm</h1>
        <h1 className="text-6xl font-bold text-yellow-200 mb-10">
          Moriyam Mohona
        </h1>
        <p className="text-2xl lg:text-3xl p-3">Front-End Developer</p>
        <button className="btn btn-outline w-2/4 border-2 font-bold text-xl lg:text-xl mt-10 mx-auto lg:mx-0">
          <a href="#contact" className="text-lg">
            Contact Me
          </a>
        </button>
      </div>
    </div>
  );
};

export default Banner;
