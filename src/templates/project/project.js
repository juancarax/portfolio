import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from "gatsby-image"
import BackArrow from "../../assets/arrow-back-circle.svg"
import ForwardArrow from "../../assets/arrow-forward-circle.svg"
import useProjects from "../../hooks/use-projects"
import CustomButton from "../../components/custom-button/custom-button.component"

import "./project.styles.scss"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      exports {
        technologies
        live
        repository
      }
      frontmatter {
        title
        image {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
      slug
      parent {
        id
      }
    }
  }
`

const PostTemplate = ({ data: { mdx: project } }) => {
  const numberOfProject = parseInt(project.slug.slice(8, 9))
  const GoBack = `/projects/project-${numberOfProject - 1}`
  const GoForth = `/projects/project-${numberOfProject + 1}`
  const { numberOfNodes } = useProjects()
  console.log(numberOfNodes)

  return (
    <Layout>
      <div className="project-singlepage__container">
        <div className="project-singlepage__body">
          <h2>{project.frontmatter.title}</h2>
          <div className="project-singlepage__navegation">
            {numberOfProject > 1 && (
              <Link to={GoBack}>
                <BackArrow className="project-singlepage__arrow project-singlepage--back-arrow" />
              </Link>
            )}
            <div className="project-singlepage__image-container">
              <Image
                fluid={project.frontmatter.image.sharp.fluid}
                className="project-singlepage__image"
              />
            </div>
            {numberOfProject < numberOfNodes && (
              <Link to={GoForth}>
                <ForwardArrow className="project-singlepage__arrow project-singlepage--forward-arrow" />
              </Link>
            )}
          </div>
          <MDXRenderer>{project.body}</MDXRenderer>

          <ul style={{ display: "flex" }}>
            {project.exports.technologies.map(tech => (
              <li>{tech} </li>
            ))}
          </ul>
          <div className="project-singlepage__buttons">
            <CustomButton
              to={project.exports.live}
              styles="btn--normal"
              typeOf="a"
            >
              LIVE VERSION
            </CustomButton>
            <CustomButton
              to={project.exports.repository}
              styles="btn--inverted"
              typeOf="a"
              style={{ marginRight: "5px" }}
            >
              GITHUB REPO
            </CustomButton>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PostTemplate
