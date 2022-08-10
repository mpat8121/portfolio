import config from "../config"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

const ContactPage = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        keywords={config.keywords}
        // image={image}
      />
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <div className="contents">
                  <h1 className="title" style={{ color: "var(--text)" }}>
                    Send me a Message
                  </h1>
                  <p style={{ color: "var(--text)" }}>
                    Send through any questions or feedback you would like me to know
                    about
                  </p>
                </div>
              </div>
              <div className="column">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
