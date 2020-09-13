import React from "react"
import "./project-preview.styles.scss"
import { Link } from "gatsby"

import Image from "gatsby-image"
const ProjectPreview = ({ project }) => {
  const To = `/projects/${project.slug}`
  return (
    <div className="project">
      <Link to={To}>
        <Image className="project__image" fluid={project.image.sharp.fluid} />
        <figcaption>{project.title} </figcaption>
      </Link>
    </div>
  )
}
export default ProjectPreview
