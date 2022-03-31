import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchPosts from "../components/searchPosts"

class CategoryPageTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const posts = this.props.data.allMdx.edges
    const location = this.props.location
    const siteTitle = data.site.siteMetadata.title
    const localSearchBlog = data.localSearchBlog
    const navigate = this.props.navigate

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title={`${pageContext.category} Posts`}
          keywords={
            [
              `blog`, `angular`, `javascript`, `ionic`, `nodejs`, `sql`,
              `mongo`, `sql server`, `c#`
            ]}
        />
        <h1 className="title has-text-centered" style={{color: "var(--text)"}}>{pageContext.category} Posts</h1>
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

export default CategoryPageTemplate

export const pageQuery = graphql`
query BlogPostsByCategory($category: [String]) {
  site {
    siteMetadata {
      title
    }
  }
  localSearchBlog {
    index
    store
  }
  allMdx(filter: {frontmatter: {categories: {in: $category}}}) {
    edges {
      node {
        excerpt
        frontmatter {
          title
          categories
          image {
            childImageSharp {
              gatsbyImageData(width: 600)
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
}
`