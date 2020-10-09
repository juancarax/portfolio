import React from "react"
import "./custom-button.styles.scss"

import { Link } from "gatsby"
const CustomButton = ({ children, to, styles, typeOf }) => {
  const classStyles = `btn ${styles}` //btn--normal or btn--inverted
  console.log(typeOf)
  return (
    <>
      {typeOf === undefined ? (
        <Link to={to} className={classStyles}>
          {children}
        </Link>
      ) : (
        <a href={to} className={classStyles} target="_blank" rel="noreferrer">
          {children}
        </a>
      )}
    </>
  )
}

export default CustomButton
