import React from "react"
import { graphql, StaticQuery } from "gatsby"

const CategoryList = () => {

    return (
        <StaticQuery
            query={categoryQuery}
            render={data => {
                const allCategories = [...new Set(data.allMdx.edges.flatMap(edge => edge.node.frontmatter.categories))].sort()
                return <div className="container">
                    <ul style={{colums: 3, "-webkit-columns": 2, "-moz-columns": 2}}>
                        {allCategories.map(cat => {
                            return <li key={cat}>{cat}</li>
                        })}
                    </ul>
                </div>
            }} />
    )
}

const categoryQuery = graphql`
  query CategoryQuery {
    site {
      siteMetadata {
        social {
          twitter
        }
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges { 
            node {
                frontmatter { 
                    categories
                }
            }
        }
    }
  }
`

export default CategoryList;