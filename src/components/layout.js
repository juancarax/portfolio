import React, { useState, useEffect, useLayoutEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../pages/styles/index.scss"
import Header from "./header/header.component.js"
import SEO from "./seo"
import GithubLogoComponent from "./github-logo/github-logo.component"
import "./layout.scss"
import LinkedInComponent from "./linked-in/linked-in.component"

const Layout = ({ children }) => {
  const [contactStyles, setContactStyles] = useState("")
  const currentUrl = typeof window !== "undefined" ? window.location.href : ""
  const res = currentUrl.split("/")

  useLayoutEffect(() => {
    if (res[3] === "" || res[3] === "contactme" || res[4]) {
      setContactStyles("container__contact--primary-color")
    }
  }, [])
  return (
    <div id="App">
      <Header />
      <SEO />
      <main className="container">
        <div className={`container__contact ${contactStyles}`}>
          <div style={{ margin: "0 0 8rem 1.5rem" }}>
            <LinkedInComponent />
            <GithubLogoComponent />
          </div>
        </div>
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
