import React from "react"
import "../styles/library.scss"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchPosts from "../components/searchPosts"

class IndexPage extends React.Component {
  render() {
    const { data, navigate, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const localSearchBlog = data.localSearchBlog

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts"
          keywords={
            [
              `blog`, `angular`, `javascript`, `ionic`, `nodejs`, `sql`,
              `mongo`, `sql server`, `c#`
            ]}
        />
        <Bio />
        <div className="container">
          <div className="columns">
            <SearchPosts
              posts={posts}
              localSearchBlog={localSearchBlog}
              navigate={navigate}
              location={location}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
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