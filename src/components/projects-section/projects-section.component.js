import React from "react"
import "./projects-section.styles.scss"
import useProjects from "../../hooks/use-projects"
import ProjectPreview from "../project-preview/project-preview.component"
const ProjectsSection = () => {
  const { data } = useProjects()
  return (
    <div className="projects-directory">
      <h2>PROJECTS</h2>
      <div className="projects-directory__container">
        {data.map(project => (
          <ProjectPreview project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsSection
