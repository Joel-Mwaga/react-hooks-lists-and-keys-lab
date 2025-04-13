import React from "react";

function ProjectItem({ project }) {
  return (
    <div>
      <h3>{project.name}</h3>
      <p>{project.about}</p>
      <div>
        {project.technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
