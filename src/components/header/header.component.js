import React, { useState, useLayoutEffect } from "react"
import "./header.styles.scss"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"
import debounce from "lodash.debounce"
const Header = () => {
  let width
  if (typeof window !== `undefined`) {
    width = window.innerWidth
  }
  const [screenSize, setScreenSize] = useState({
    windowWidth: width,
  })

  useLayoutEffect(() => {
    const debounceHandleResize = debounce(() => {
      setScreenSize({ windowWidth: window.innerWidth })
    }, 1000)
    window.addEventListener("rezise", debounceHandleResize)

    return () => {
      window.removeEventListener("resize", debounceHandleResize)
    }
  })

  const { windowWidth } = screenSize
  console.log(windowWidth)
  return (
    <div className="header" id="testing">
      {windowWidth > 800 ? (
        <div className="header__container" id="header__outer">
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              border: "none",
              textDecoration: "none",
            }}
          >
            <div className="header__image-container">
              <img
                src="https://res.cloudinary.com/dop6uan6j/image/upload/v1598038627/Jk-logo_mlykvs.png"
                alt="Logo"
                className="header__image"
              />
            </div>
            <span className="header__name">JuanGarcía</span>
          </Link>

          <div className="header__options">
            <Link to="/contactme" className="header__options--option">
              CONTACT
            </Link>
            <Link to="/aboutme" className="header__options--option">
              ABOUT
            </Link>
            <Link to="/projects" className="header__options--option">
              PORTFOLIO
            </Link>
          </div>
        </div>
      ) : (
        <div className="header__container" id="container">
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              border: "none",
              textDecoration: "none",
            }}
          >
            <div className="header__image-container">
              <img
                src="https://res.cloudinary.com/dop6uan6j/image/upload/v1598038627/Jk-logo_mlykvs.png"
                alt="Logo"
                className="header__image"
              />
            </div>
            <span className="header__name">JuanGarcía</span>
          </Link>
          <Menu right outerContainerId={"id"}>
            <Link to="/contactme" className="header__options--option">
              CONTACT
            </Link>
            <Link to="/aboutme" className="header__options--option">
              ABOUT
            </Link>
            <Link to="/projects" className="header__options--option">
              PORTFOLIO
            </Link>
          </Menu>
        </div>
      )}
    </div>
  )
}

export default Header
