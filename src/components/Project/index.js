import React from 'react'
import projects from '../../projects.json'

function ProjectCard(props) {
  return (
    <div className="card"> 
      <div className="img-container">
        <img alt={props.name} src={props.image} width="100%" height="300px"/>
      </div>
      <div className="content">
        <ul>
          <li>
            <p className="project-title">{props.name}</p>
          </li>
          <li>
          <p className="project-description">{props.description}</p>
          </li>
          <li>
            <div className="project-icons">
            <a href={props.github}><img src="icons8-github-60.png" alt="github-icon"/></a> 
            <a href={props.deployedapp}><img src="icons8-website-60.png" alt="deployed-icon"/></a> 
            </div>
          </li>
          <li>
          {props.skills}
          </li>
        </ul>
      </div>
    </div>
  );
}

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function Projects () {  
  return (
  <>
  <div className="project">
  <h2 className="title">Projects</h2>
  </div>

    <Wrapper>
      {projects.map((project) => (
        <ProjectCard 
        name={project.name}
        key={project.id}
        image={project.image}
        github={project.github}
        deployedapp={project.deployedapp}
        skills={project.skills}
        description={project.description}
        />
      ))}
    </Wrapper>
  </>
  
  );
}

export default Projects