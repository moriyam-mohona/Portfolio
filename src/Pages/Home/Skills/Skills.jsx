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
                <img
                  src="../../../../public/Images/html.png"
                  alt=""
                  className="h-20 w-20 mx-auto"
                />
                <p className="py-6">HTML</p>
              </div>
              <div className="bg-base-200 text-center p-3">
                <img
                  src="../../../../public/Images/css-3.png"
                  alt=""
                  className="h-20 w-20 mx-auto"
                />
                <p className="py-6">CSS</p>
              </div>
              <div className="bg-base-200 text-center p-3">
                <img
                  src="../../../../public/Images/js.png"
                  alt=""
                  className="h-20 w-20 mx-auto"
                />
                <p className="py-6">JavaScript</p>
              </div>
              <div className="bg-base-200 text-center p-3">
                <img
                  src="../../../../public/Images/react.png"
                  alt=""
                  className="h-20 w-20 mx-auto"
                />
                <p className="py-6">React.js</p>
              </div>
              <div className="bg-base-200 text-center p-3">
                <img
                  src="../../../../public/Images/express.png"
                  alt=""
                  className="h-20 w-20 mx-auto"
                />
                <p className="py-6">Express</p>
              </div>
              <div className="bg-base-200 text-center p-3">
                <img
                  src="../../../../public/Images/mongo.png"
                  alt=""
                  className="h-20 w-20 mx-auto"
                />
                <p className="py-6">MongoDB</p>
              </div>
              <div className="bg-base-200 text-center p-3">
                <img
                  src="../../../../public/Images/node-js.png"
                  alt=""
                  className="h-20 w-20 mx-auto"
                />
                <p className="py-6">Node.js</p>
              </div>
              <div className="bg-base-200 text-center p-3">
                <img
                  src="../../../../public/Images/git.png"
                  alt=""
                  className="h-20 w-20 mx-auto"
                />
                <p className="py-6">Git</p>
              </div>
              <div className="bg-base-200 text-center p-3">
                <img
                  src="../../../../public/Images/illustrator.png"
                  alt=""
                  className="h-20 w-20 mx-auto"
                />
                <p className="py-6">Illustrator</p>
              </div>
              <div className="bg-base-200 text-center p-3">
                <img
                  src="../../../../public/Images/photoshop.png"
                  alt=""
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
