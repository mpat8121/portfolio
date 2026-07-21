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
          <p className="about-p">
            I&apos;m Mick &amp; welcome to my blog. If the home page gave you
            the short version, here&apos;s the longer one.
          </p>
          <p className="about-p">
            I didn&apos;t start out in software. I hold a Bachelor&apos;s degree
            in Mechanical Engineering, and my working life began in CAD drafting
            and business analytics as a contractor for a few major Australian companies. From
            there my role shifted toward building business process management
            applications in Angular, and a couple of years later I published my
            first cross-platform mobile app. I&apos;m entirely self-taught as a
            developer. Everything since that first app has been learned
            on the job.
          </p>
          <p className="about-p">
            These days I work for a small IT shop in Sydney, where I&apos;ve
            been for over 10 years, across the full stack: Node.js,
            C#/.NET, SQL Server and MongoDB on the back end, Azure
            infrastructure and DevOps, security hardening, and solutions
            architecture for client and vendor integrations. On the front end I
            still get hands-on with JavaScript, Angular and React.
          </p>
          <p className="about-p">
            On the side, I run{" "}
            <a
              href="https://www.interapptive.com.au"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--text)" }}
            >
              InterApptive
            </a>
            , through which I co-founded and lead the tech for{" "}
            <a
              style={{ color: "var(--textNormal)" }}
              href="https://defectwise.com.au"
              target="_blank"
              rel="noreferrer"
            >
              DefectWise
            </a>
            , a SaaS platform for construction defect management. It&apos;s the
            project most of what I write here ends up being informed by.
          </p>
          <p className="about-p">
            This blog is where I put the case studies, the tips I wish I&apos;d
            learned sooner, and the small crucial snippets of code I keep
            reaching for, mostly so future-me can find them again, and
            hopefully useful to you too.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
