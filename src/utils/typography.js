import Typography from "typography"

const typography = new Typography({
  baseFontSize: "1.2rem",
  baseLineHeight: 1.4,
  bodyFontFamily: ["Open Sans", "sans-serif"],
  headerFontFamily: ["Open Sans", "sans-serif"],
})

typography.injectStyles()

export default typography
