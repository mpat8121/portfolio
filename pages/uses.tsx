import React from "react"
import config from "../config"
import Layout from "../components/layout"
import SEO from "../components/seo"

const UsesPage = () => {
  return (
    <Layout>
      <SEO title="Uses" keywords={config.keywords} />
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
                    I run two computers in parallel. I need to be using a Mac of
                    some description in order to create and publish iOS mobile
                    apps, so I have a Macbook Pro. I also have a Windows 10
                    Desktop PC that has a bit more grunt and I mostly use it for
                    C#/.NET specific development. Some of this can be done on
                    the Macbook using Mono, but I prefer to code in Windows for
                    these times. The KVM switch comes in really handy here as it
                    allows me to connect the peripherals to a central hub and
                    just click a button to switch between the Macbook and the
                    PC.
                  </p>
                  <ul style={{ color: "var(--text)" }}>
                    <li>
                      Mid-2014 Macbook Pro, 2.5Ghz Core i7, 16GB Memory, GeForce
                      GT 750M 2Gb Graphics
                    </li>
                    <li>
                      Desktop, 3.7Ghz Core i7-8700k, 16Gb Memory, GeForce GTX
                      1080 8Gb Graphics{" "}
                    </li>
                    <li>34-inch LG Monitor - LG HDR WFHD</li>
                    <li>Sabrent USB 3.0 Sharing Switch</li>
                    <li>Turtle Beach Stealth 600 Wireless Headset</li>
                    <li>Razer Lancehead Gaming Edition Wired Mouse</li>
                    <li>
                      Leopold FC900R Grey/Blue PD Double Shot PBT Mechanical
                      Keyboard with numpad
                    </li>
                    <li>Google Pixel 3</li>
                    <li>Google Pixel 6</li>
                    <li>Applie iPad</li>
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
                    <li>PostMan</li>
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
