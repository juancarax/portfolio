import React from "react"
import "./aboutme-section.styles.scss"
import AboutMeImage from "../../assets/aboutme-image.svg"
import CustomButton from "../custom-button/custom-button.component"

const AboutMe = () => (
  <section className="aboutme">
    <h2> ABOUT ME </h2>
    <AboutMeImage className="aboutme__image" />
    <p>
      Hi!, my name is Juan García and I'm starting my career in tech industry as
      a web developer. Currently I'm in my third year in University, pursuing a
      degree in Computer Science. <br /> <br /> I'm a well-organized person,
      passionate about self-growth, always motivated and eager to learn
      something new every day. When not coding I spend my time reading,
      listening to music and playing videogames with friends!
    </p>
    <CustomButton styles="btn--inverted">CHECK OUT MY RESUME</CustomButton>
  </section>
)

export default AboutMe
