import React from "react"
import config from "../config"

const Bio = () => {
  const { social } = config

  return (
    <div className="container">
      <div className="columns is-mobile is-multiline">
        <div className="column content has-text-centered">
          <div>
            <p className="title" style={{ color: "var(--text)" }}>
              A window into the Full-Stack World
            </p>
            <p>
              In this blog, I explore the world of full-stack web development. Here you will find
              everything I learned in over a decade on the job, from niche bug fixes, how-to&apos;s on mobile app development and API
              configuration questions to info about the life of a web developer.
            </p>
            <p>
              For front-end developers I will be outlining common
              configurations and quirks you may find when working with JavaScript, Angular,
              React, Flutter and Ionic/Capacitor.js.
            </p>
            <p>
              These days I most commonly work on the back-end using Node.Js, C#/.NET and SQL
              or MongoDB. After building several indie apps currently sold in the major stores, I can share quite a few tidbits to make
              your life easier.
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
        {/* <div className="column">
          <figure className="image">
            <img
              style={{ filter: "var(--svg-color-filter)", maxHeight: "300px" }}
              src="../blog-header-image.svg"
              alt="Blog card feature"
            />
          </figure>
        </div> */}
      </div>
    </div>
  )
}

export default Bio
