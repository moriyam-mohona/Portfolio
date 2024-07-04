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
    <section id="skills" className="py-20 mb-10 bg-base-200">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl lg:text-6xl font-bold text-yellow-200 mb-6">
          My Skills
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <hr className="border-2 col-span-1 lg:mr-5" />
          <div className="col-span-1 lg:col-span-11">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              <div className="bg-base-300 text-center p-3">
                <img src={html} alt="HTML" className="h-20 w-20 mx-auto" />
                <p className="pt-6 pb-3">HTML</p>
              </div>
              <div className="bg-base-300 text-center p-3">
                <img src={css} alt="CSS" className="h-20 w-20 mx-auto" />
                <p className="pt-6 pb-3">CSS</p>
              </div>
              <div className="bg-base-300 text-center p-3">
                <img src={js} alt="JavaScript" className="h-20 w-20 mx-auto" />
                <p className="pt-6 pb-3">JavaScript</p>
              </div>
              <div className="bg-base-300 text-center p-3">
                <img src={react} alt="React.js" className="h-20 w-20 mx-auto" />
                <p className="pt-6 pb-3">React.js</p>
              </div>
              <div className="bg-base-300 text-center p-3">
                <img
                  src={express}
                  alt="Express"
                  className="h-20 w-20 mx-auto"
                />
                <p className="pt-6 pb-3">Express</p>
              </div>
              <div className="bg-base-300 text-center p-3">
                <img
                  src={MongoDB}
                  alt="MongoDB"
                  className="h-20 w-20 mx-auto"
                />
                <p className="pt-6 pb-3">MongoDB</p>
              </div>
              <div className="bg-base-300 text-center p-3">
                <img src={nodejs} alt="Node.js" className="h-20 w-20 mx-auto" />
                <p className="pt-6 pb-3">Node.js</p>
              </div>
              <div className="bg-base-300 text-center p-3">
                <img src={git} alt="Git" className="h-20 w-20 mx-auto" />
                <p className="pt-6 pb-3">Git</p>
              </div>
              <div className="bg-base-300 text-center p-3">
                <img
                  src={Illustrator}
                  alt="Illustrator"
                  className="h-20 w-20 mx-auto"
                />
                <p className="pt-6 pb-3">Illustrator</p>
              </div>
              <div className="bg-base-300 text-center p-3">
                <img
                  src={Photoshop}
                  alt="Photoshop"
                  className="h-20 w-20 mx-auto"
                />
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
