import html from "../../../assets/Images/html.png";
import css from "../../../assets/Images/css-3.png";
import js from "../../../assets/Images/js.png";
import react from "../../../assets/Images/react.png";
import express from "../../../assets/Images/express.png";
import MongoDB from "../../../assets/Images/mongo.png";
import nodejs from "../../../assets/Images/node-js.png";
import git from "../../../assets/Images/git.png";
import Illustrator from "../../../assets/Images/illustrator.png";
import Photoshop from "../../../assets/Images/photoshop.png";
const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-bold text-yellow-200 mb-6">My Skills</h2>
        <div className="grid grid-cols-12 gap-5 ">
          <hr className="border-2 col-span-1 mr-5" />
          <div className="col-span-11 ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {" "}
              <div className="bg-base-200 text-center p-3">
                <img src={html} alt="" className="h-20 w-20 mx-auto" />
                <p className="py-6">HTML</p>
              </div>
              <div className="bg-base-200 text-center p-3">
                <img src={css} alt="" className="h-20 w-20 mx-auto" />
                <p className="py-6">CSS</p>
              </div>
              <div className="bg-base-200 text-center p-3">
                <img src={js} alt="" className="h-20 w-20 mx-auto" />
                <p className="py-6">JavaScript</p>
              </div>
              <div className="bg-base-200 text-center p-3">
                <img src={react} alt="" className="h-20 w-20 mx-auto" />
                <p className="py-6">React.js</p>
              </div>
              <div className="bg-base-200 text-center p-3">
                <img src={express} alt="" className="h-20 w-20 mx-auto" />
                <p className="py-6">Express</p>
              </div>
              <div className="bg-base-200 text-center p-3">
                <img src={MongoDB} alt="" className="h-20 w-20 mx-auto" />
                <p className="py-6">MongoDB</p>
              </div>
              <div className="bg-base-200 text-center p-3">
                <img src={nodejs} alt="" className="h-20 w-20 mx-auto" />
                <p className="py-6">Node.js</p>
              </div>
              <div className="bg-base-200 text-center p-3">
                <img src={git} alt="" className="h-20 w-20 mx-auto" />
                <p className="py-6">Git</p>
              </div>
              <div className="bg-base-200 text-center p-3">
                <img src={Illustrator} alt="" className="h-20 w-20 mx-auto" />
                <p className="py-6">Illustrator</p>
              </div>
              <div className="bg-base-200 text-center p-3">
                <img src={Photoshop} alt="" className="h-20 w-20 mx-auto" />
                <p className="py-6">Photoshop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
