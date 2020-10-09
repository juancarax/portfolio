import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderSection from "../components/header-section/header-section.component"

import "./styles/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Juan García Portfolio" />

    <HeaderSection />
  </Layout>
)

export default IndexPage
