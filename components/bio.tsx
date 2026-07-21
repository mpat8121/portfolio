import React from "react"
import config from "../config"

const Bio = () => {
  const { social } = config

  return (
    <div className="container">
      <div className="columns is-mobile is-multiline">
        <div className="column content has-text-centered">
          <div>
            <p className="title">The Full-Stack Log</p>
            <p>
              I&apos;m a full-stack developer based in Sydney with over a decade
              in the industry. This blog is where I write up the bug fixes,
              architecture decisions and production lessons I&apos;d otherwise
              lose to a Slack thread. Stuff that only makes sense
              once you&apos;ve hit it in the wild.
            </p>
            <p>
              Day-to-day I work across the stack &dash; Node.js, C#/.NET, SQL
              and MongoDB on the back end, Azure infrastructure and DevOps,
              security hardening, and solutions architecture for client and
              vendor integrations. On the front end I&apos;ve spent plenty of
              time in JavaScript, Angular and React.
            </p>
            <p>
              I&apos;m also co-founder and technical lead of{" "}
              <a href="https://defectwise.com.au">DefectWise</a>, a SaaS
              platform for construction defect management. This means
              most of what I write here is informed by building and running a
              real product, not just side projects.
            </p>
            <p>
              Follow me on Twitter{" "}
              <a href={`https://twitter.com/${social.twitter}`}>
                @{social.twitter}
              </a>{" "}
              for updates and thoughts on the industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio
