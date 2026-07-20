import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" path="/about" />
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container" style={{ height: "100%" }}>
            <About />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
