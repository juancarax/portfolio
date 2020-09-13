import React from "react"
import "./header-section.styles.scss"
import HeaderImage from "../../assets/header-image.svg"
import CustomButton from "../custom-button/custom-button.component"

const HeaderSection = () => (
  <>
    <div className="header__section">
      <div style={{ marginTop: "-50px" }}>
        <h1>
          ¡Hola! I'm Juan García a{" "}
          <span>
            {" "}
            <br /> Front-end developer
          </span>
        </h1>
      </div>
      <div className="header__section__description">
        I'm a Panamenian based front-end developer <br /> utterly focused on
        developing user-friendly <br /> web pages, scalable web apps and clean
        code
      </div>

      <div className="header__section__buttons">
        <CustomButton to="/projects" styles="btn--normal">
          GO TO PROJECTS
        </CustomButton>
        <CustomButton to="/contactme" styles="btn--inverted">
          CONTACT ME{" "}
        </CustomButton>
      </div>
    </div>

    <div className="header__section__image-container">
      <HeaderImage className="header__section__image" />
    </div>
  </>
)

export default HeaderSection
