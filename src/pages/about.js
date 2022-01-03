import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo"
import About from "../components/about"

class AboutPage extends React.Component {

    render() {
        const { data, location } = this.props;
        const siteTitle = data.site.siteMetadata.title;
        return (<Layout location={location} title={siteTitle}>
            <SEO title="About"
                keywords={
                    [
                        `blog`, `angular`, `javascript`, `ionic`, `nodejs`, `sql`,
                        `mongo`, `sql server`, `c#`
                    ]}
            />
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container" style={{ height: '100%' }}>
                        <About />
                    </div>
                </div>
            </section>
        </Layout>)
    }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
}`