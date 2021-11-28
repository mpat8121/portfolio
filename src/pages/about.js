import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo"

class AboutPage extends React.Component {

    render() {
        console.log(this.props);
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
                        <div className="columns">
                            <div className="column">
                                <div className="content has-text-centered">
                                    <h1 className="title" style={{ color: 'var(--text)' }}>
                                        Hey {" "}
                                        <span role="img" aria-label="wave emoji">
                                            👋
                                        </span>
                                    </h1>
                                    <p className="about-p">Welcome!</p>
                                    <p className="about-p">I'm a self-taught fullstack dev who has been working for a small IT shop
                                        in Sydney, Australia for more than 10 years...<br />
                                        I also run <a href="https://www.interapptive.com.au" target="_blank" rel="noreferrer">Interapptive</a> on the side for funsies.</p>
                                    <p className="about-p">Originally, I completed a Bachelors degree in Mechanical Engineering. And then proceeded to
                                        not work a single day using the skills I spent 4 years at university acquiring. A couple of years
                                        spent doing CAD drafting work before moving into low level business analytics.
                                    </p>
                                    <p className="about-p">The tech stack I work with is mostly Node.Js, C#, Angular, Ionic with a
                                        little bit of Java and Swift thrown in for Capacitor plugin development.
                                        SQL Server, MySQL and MongoDB are my data stores of choice.
                                        I also use Microsoft Azure for all my DevOps needs.</p>
                                    <p className="about-p">My work with InterApptive focusses on mobile apps, with our current project
                                        being <a style={{ color: 'var(--textNormal)' }} href="https://defectwise.com.au" target="_blank" rel="noreferrer">DefectWise</a></p>
                                    <p className="about-p">I write short snippets of common code that gets used a lot,
                                        small tips I've found whilst building stuff,
                                        along with some case studies of my projects and a bit about how I got here.</p>
                                </div>
                            </div>
                        </div>
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