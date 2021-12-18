import React from "react"
import { Link } from "gatsby"

const AllPosts = ({ posts }) => (
  <div className="columns is-multiline">
    {posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      const { categories, image } = node.frontmatter;

      return (
          <div className="column is-half-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd" key={node.fields.slug}>
            <div className="card has-equal-height">
              <div className="card-image">
                <figure className="image is-2by1">
                  <img src={image ? image.childImageSharp.sizes.src : ''} alt="Blog card feature" />
                </figure>
              </div>
              <div className="card-content">
                <h1 className="title">
                  <Link style={{ boxShadow: `none`, color: 'var(--textLink)' }} to={`/blog${node.fields.slug}`}>
                    {title}
                  </Link>
                </h1>
                <div className="tags">
                  {categories.map(category => {
                    return <span key={category} className="tag">{category}</span>
                  })}
                </div>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            </div>
          </div>

      )
    })}
  </div>
)

const SearchPosts = ({ posts, localSearchBlog, location, navigate }) => {
  return (
    <AllPosts posts={posts} />
  )
}

export default SearchPosts
