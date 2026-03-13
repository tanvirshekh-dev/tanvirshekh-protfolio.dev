import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(()=>{
    fetch('/projects.json')
    .then((res)=> res.json())
    .then((data)=> setProjects(data))
  }, [])
  return (
    <div>
      <h2 className="text-center text-4xl mt-8 ">
          My Recent{" "}
          <span className="bg-gradient-to-r from-[#00d390] to-[#00fff2] bg-clip-text text-transparent">
            Project
          </span>
        </h2>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 mb-28">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="card shadow-2xl">
              <figure>
                <img
                  src={project.image}
                  alt="Project Image"
                  className="h-[220px] w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">{project.title}</h2>
                <p className="text-gray-400 text-md">
                  {project.description}
                </p>
                {/* badge */}
                <div className="flex gap-x-2 ">
                  {
                    project.technologies.map((tech, index)=>(
                      <div key={index}>{tech}</div>
                    ))
                  }
                </div>
                <div className="card-actions">
                  <button className="btn btn-outline btn-success w-full my-3">View case Study</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
