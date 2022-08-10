import React from "react"
import config from "../config"

const Bio = () => {
  const { social } = config

  return (
    <div className="columns is-mobile">
      <div className="column has-text-centered">
        <div>
          <p className="title" style={{ color: "var(--text)" }}>
            Delve into the Full-Stack World
          </p>
          <p>
            In this blog, I explore everything full-stack web developer related
            from niche bug fixes, mobile development, API configuration and web
            developer lifestyle matters.
          </p>
          <p>
            For front-end developers I will be detailing all sorts of
            configuration and quirks when working with JavaScript, Angular,
            React and Ionic/Capacitor.js.
          </p>
          <p>
            For the back-end developers, I work with Node.js, C#/.NET and SQL or
            MongoDB. If that applies to you, there will be tidbits to make your
            life easier.
          </p>
          <p style={{ color: "var(--text)" }}>
            Follow me on Twitter{" "}
            <a
              href={`https://twitter.com/${social.twitter}`}
              style={{ color: "var(--text)" }}
            >
              @{social.twitter}
            </a>{" "}
            for updates and thoughts on life.
          </p>
          <p>
            As featured on{" "}
            <a href="https://tech-blogs.dev" style={{ color: "var(--text)" }}>
              tech-blogs.dev
            </a>
          </p>
        </div>
      </div>
      <div className="column">
        <figure className="image">
          <img
            style={{ filter: "var(--svg-color-filter)", maxHeight: "300px" }}
            src="../blog-header-image.svg"
            alt="Blog card feature"
          />
        </figure>
      </div>
    </div>
  )
}

export default Bio
