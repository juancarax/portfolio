import React from "react"
import AboutMe from "../components/aboutme-section/aboutme-section.component"

import "./styles/index.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMePage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutMe />
  </Layout>
)

export default AboutMePage
