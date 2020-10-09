import React from "react"
import "./linked-in.styles.scss"

import LinkedInLogo from "../../assets/linkedin-logo.svg"

const LinkedInComponent = () => (
  <a
    href="https://www.linkedin.com/in/juan-garc%C3%ADa-12a3741b7/"
    target="_blank"
    rel="noreferrer"
  >
    <LinkedInLogo className="linkedin" />
  </a>
)

export default LinkedInComponent
