import { graphql } from "gatsby"
import React from "react"

class CategoryPageTemplate extends React.Component {
    render() {
        console.log(this.props, this.context, this.state)
        return <div></div>
    }
}

export default CategoryPageTemplate

export const pageQuery = graphql`
query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              categories
              image {
                childImageSharp {
                  sizes(maxWidth: 600) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      }
}
`