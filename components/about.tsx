import React from "react"

const About = () => {
  return (
    <div className="columns">
      <div className="column">
        <div className="content has-text-centered">
          <h1 className="title" style={{ color: "var(--text)" }}>
            Hi There!{" "}
            <span role="img" aria-label="wave emoji">
              👋
            </span>
          </h1>
          <p className="about-p">Welcome to my blog!</p>
          <p className="about-p">
            I&apos;m Mick, a self-taught fullstack developer working for a small IT
            shop in Sydney, Australia for over 10 years...
            <br />I also run{" "}
            <a
              href="https://www.interapptive.com.au"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--text)" }}
            >
              InterApptive
            </a>{" "}
            on the side.
          </p>
          <p className="about-p">
            I hold a Bachelors degree in Mechanical Engineering, and from there I started my working life doing CAD drafting and business
            analytics for a few major Australian companies. Over time my responsibilites shifted to building business process management
            applications using Angular, and a couple of years later I published my very first cross-platform mobile app.
          </p>
          <p className="about-p">
            The tech stack I work with evolves constantly, but I&apos;m most familiar with Node.Js, C#, Angular, Ionic
            with a little bit of Java and Swift thrown in for Capacitor plugin
            development. Microsoft SQL Server, MySQL and MongoDB are my data stores of
            choice. I also use Microsoft Azure for all my hosting and DevOps needs.
          </p>
          <p className="about-p">
            My own company InterApptive focusses on mobile apps, feel free to check out our current major
            project {" "}
            <a
              style={{ color: "var(--textNormal)" }}
              href="https://defectwise.com.au"
              target="_blank"
              rel="noreferrer"
            >
              DefectWise
            </a>
          </p>
          <p className="about-p">
            In this blog I want to share short snippets of common code that gets used a lot, small
            but crucial tips that I wish I learned sooner, I will also write up some case studies
            about my projects and my own professional development that may help others on their journey.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
