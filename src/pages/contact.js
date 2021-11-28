import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
class ContactPage extends React.Component {

    render() {

        const { data, location } = this.props;
        const siteTitle = data.site.siteMetadata.title;
        return (
            <Layout location={location} title={siteTitle}>
                <SEO title="Contact"
                    keywords={
                        [
                            `blog`, `angular`, `javascript`, `ionic`, `nodejs`, `sql`,
                            `mongo`, `sql server`, `c#`
                        ]} />
                <section className="hero is-fullheight">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-half">
                                    <div className="contents">
                                        <h1 className="title" style={{ color: 'var(--text)' }}>Send me a Message</h1>
                                        <p style={{ color: 'var(--text)' }}>Send through any questions or feedback you'd like me to know about</p>
                                    </div>
                                </div>
                                <div className="column">
                                    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                                        <input type="hidden" name="bot-field" />
                                        <input type="hidden" name="form-name" value="contact" />
                                        <div className="field">
                                            <label className="label" style={{ color: 'var(--text)' }}>Name</label>
                                            <div className="control">
                                                <input className="input" type="text" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label" style={{ color: 'var(--text)' }}>Email</label>
                                            <div className="control has-icons-left has-icons-right">
                                                <input className="input is-danger" type="email" placeholder="Email input" />
                                                <span className="icon is-small is-left">
                                                    <FontAwesomeIcon icon={faEnvelope} />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label" style={{ color: 'var(--text)' }}>Message</label>
                                            <div className="control">
                                                <textarea className="textarea" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="field is-grouped">
                                            <div className="control">
                                                <button className="button is-link">Submit</button>
                                            </div>
                                            <div className="control">
                                                <button className="button is-link is-light">Cancel</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default ContactPage

export const pageQuery = graphql`
query {
    site {
      siteMetadata {
        title
      }
    }
}`