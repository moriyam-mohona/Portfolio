import { useRef } from "react";
import { ProjectList } from "../Projects/ProjectList";
import { Link } from "react-router-dom";

export default function Project() {
  const boxRef = useRef(null);

  return (
    <section id="projects" className="px-6 py-20">
      <h2 className="text-6xl font-bold text-yellow-200 mb-14 ">Projects</h2>
      <div className="grid grid-cols-12 gap-5 ">
        <hr className="border-2 col-span-1 mr-5" />
        <div
          className="col-span-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={boxRef}
        >
          {ProjectList?.map((project) => (
            <div
              key={project.heading}
              className="shadow-lg hover:bg-base-300 transition duration-300"
            >
              <h3 className="text-xl font-bold text-yellow-200 mb-3">
                {project.heading}
              </h3>
              <div className="w-full">
                <Link to={project.liveLink} target="_blank">
                  <img
                    src={project.img}
                    alt={project.heading}
                    className="w-full mb-4"
                  />
                </Link>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-yellow-200">
                  {project.title}
                </h4>
                <div className="w-3/5 border-t-2 border-yellow-200 mx-auto my-3"></div>
                <p className="">{project.description}</p>
              </div>

              {/* Tech Stack */}
              <div className="mt-4">
                <h5 className="text-lg font-semibold text-yellow-200">
                  Tech Stack
                </h5>
                <div className="w-3/5 border-t-2 border-yellow-200 mx-auto mb-4"></div>
                <div className="grid grid-cols-4 gap-4 text-center">
                  {project.techStack?.map((tech) => (
                    <div key={tech.title}>
                      <div className="flex justify-center">
                        <img
                          src={tech.img}
                          style={{ width: tech.wid }}
                          alt={tech.title}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex justify-around">
                <a
                  href={project.gitLink}
                  target="_blank"
                  className="text-yellow-200 border-2 border-yellow-200 py-2 px-4 rounded transition duration-300 hover:bg-base-100 hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="text-yellow-200 border-2 border-yellow-200 py-2 px-4 rounded transition duration-300 hover:bg-base-100 hover:text-white"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
