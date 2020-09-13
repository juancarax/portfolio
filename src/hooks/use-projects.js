import { graphql, useStaticQuery } from "gatsby"

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            image {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `)

  return {
    data: data.allMdx.nodes.map(post => ({
      title: post.frontmatter.title,
      slug: post.frontmatter.slug,
      excerpt: post.excerpt,
      image: post.frontmatter.image,
    })),
    numberOfNodes: data.allMdx.nodes.length,
  }
}

export default useProjects
