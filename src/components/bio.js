/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        return (
          <div className="container">
            <div className="columns is-mobile">
              <div className="column is-half-desktop is-full-mobile">
                <h1 className="title" style={{ color: "var(--text)" }}>Delve into the Full-Stack World</h1>
                <p className="content">
                  In this blog, I explore everything full-stack web developer related from niche bug fixes, mobile development, API configuration and web developer lifestyle matters.
                </p>
                <p className="content">
                  For front-end developers I'll be detailing all sorts of configuration and quirks when working with JavaScript, Angular, React and Ionic/Capacitor.js.
                </p>
                <p className="content">
                  For the back-end developers, I work with Node.js, C#/.NET and SQL or MongoDB. If that applies to you, there'll be tidbits to make your life easier.
                </p>
                <p style={{ color: 'var(--text)' }}>
                  Follow me on Twitter <a href={`https://twitter.com/${social.twitter}`} style={{ color: 'var(--text)' }}>
                    @{social.twitter}</a> for updates and thoughts on life.
                </p>
              </div>
              <div className="column is-desktop">
                <figure className="image">
                  <img style={{ filter: "var(--svg-color-filter)", maxHeight: "300px" }} src="../blog-header-image.svg" alt="Blog card feature" />
                </figure>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
