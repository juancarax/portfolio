import React from "react"
import "./styles/index.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProjectsSection from "../components/projects-section/projects-section.component"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <ProjectsSection />
  </Layout>
)

export default Projects
