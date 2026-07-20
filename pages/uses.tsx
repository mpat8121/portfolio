import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const UsesPage = () => {
  return (
    <Layout>
      <SEO title="Uses" path="/uses" />
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container" style={{ height: "100%" }}>
            <div className="columns">
              <div className="column">
                <div className="content has-text-centered">
                  <h1 className="title" style={{ color: "var(--text)" }}>
                    Uses
                  </h1>
                  <p>
                    This is a collated list of all the software, hardware and
                    office equipment I use on a daily basis
                  </p>
                  <h2 className="title" style={{ color: "var(--text)" }}>
                    Hardware
                  </h2>
                  <p>
                    I run three computers in parallel. I have a M2 MacBook Pro that I use at my full time job. I also need to be using a Mac of some description in order to create and publish iOS mobile
                    apps, so I have a M4 Mac Mini. I also have a Windows 11
                    Desktop PC that I mostly use for legacy C#/.NET specific development. Some of this can be done on
                    the MacBook using Mono, but I prefer to code in Windows for
                    these times. The KVM switch comes in really handy here as it
                    allows me to connect the peripherals to a central hub and
                    just click a button to switch between the three of them.
                  </p>
                  <ul style={{ color: "var(--text)" }}>
                    <li>
                      2021 M2 MacBook Pro
                    </li>
                    <li>
                      Windows 11 Desktop, 3.7Ghz Core i7-8700k, 16Gb Memory, GeForce GTX
                      1080 8Gb Graphics{" "}
                    </li>
                    <li>2x 27-inch LG Ultra gear QHD Monitor</li>
                    <li>Sabrent USB 3.0 Sharing Switch</li>
                    <li>Turtle Beach Stealth 600 Wireless Headset</li>
                    <li>Logitech Wireless Mouse</li>
                    <li>
                      Meko 71-key Wireless Keyboard
                    </li>
                    <li>Apple iPhone 8 for app testing on legacy devices</li>
                    <li>Google Pixel 9</li>
                    <li>Apple iPad</li>
                  </ul>
                  <h2 className="title" style={{ color: "var(--text)" }}>
                    Software
                  </h2>
                  <ul style={{ color: "var(--text)" }}>
                    <li>VS Code</li>
                    <li>Slack</li>
                    <li>GitKraken</li>
                    <li>Microsoft Teams</li>
                    <li>Google Chrome</li>
                    <li>Microsoft Edge</li>
                    <li>Firefox</li>
                    <li>XCode</li>
                    <li>Android Studio</li>
                    <li>Claude Code</li>
                    <li>Azure Data Studio</li>
                    <li>Spotify</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default UsesPage
