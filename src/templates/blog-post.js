import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react";

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const image = post.frontmatter.image
      ? post.frontmatter.image.childImageSharp.fixed.src
      : null
    const { previous, next } = this.props.pageContext

    const h2 = props => <h2 className="title is-4" style={{ color: "var(--text)" }} {...props} />
    const h3 = props => <h3 className="title is-5" style={{color: "var(--text)"}} {...props} />
    const h4 = props => <h4 className="title is-6" style={{color: "var(--text)"}} {...props} />
    const p = props => <p className="content" {...props} />
    const a = props => <a style={{color: "var(--textLink)"}} {...props} />
    const ul = props => <ul className="ul-last" {...props} />
    
    const components = {
      h2,
      h3,
      h4,
      p,
      a,
      ul
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={image}
          pathname={this.props.location.pathname}
        />
        <h1 className="title" style={{ color: 'var(--text)' }}>{post.frontmatter.title}</h1>

        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
            color: 'var(--text)'
          }}
        >
          {post.frontmatter.date}
        </p>
        <p className="content"><Link style={{ color: 'var(--text)' }}>
          <div className="tags">{post.frontmatter.categories.map(category => {
            return (<span key={category} className="tag">{category}</span>)
          })}
          </div>
        </Link> </p>
        <p>
          <MDXProvider components={components}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </p>
        <hr
          style={{
            marginBottom: rhythm(1),
            color: 'var(--hr)'
          }}
        />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,

          }}
        >
          <li>
            {previous && (
              <Link style={{ color: 'var(--text)' }} to={`/blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link style={{ color: 'var(--text)' }} to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        categories
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          childImageSharp {
            fixed(width: 600) {
              ...GatsbyImageSharpFixed
            }          
          }
        }
      }
    }
  }
`
