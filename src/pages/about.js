import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo"
import Button from "../components/button"
import { Link } from "gatsby"

class AboutPage extends React.Component {

    render() {
        console.log(this.props);
        return (<Layout>
            <SEO title="All posts"
                keywords={
                    [
                        `blog`, `angular`, `javascript`, `ionic`, `nodejs`, `sql`,
                        `mongo`, `sql server`, `c#`
                    ]}
            />
            <h1 style={{ color: 'var(--h1)' }}>
                Hey {" "}
                <span role="img" aria-label="wave emoji">
                    👋
                </span>
            </h1>
            <p style={{ color: 'var(--textNormal)' }}>Welcome!</p>
            <p style={{ color: 'var(--textNormal)' }}>I'm a self-taught fullstack dev who has been working for a small IT shop
                in Sydney, Australia for more than 10 years...<br />
                I also run <a style={{ color: 'var(--textNormal)' }} href="https://www.interapptive.com.au" target="_blank">Interapptive</a> on the side for funsies.</p>
            <p style={{ color: 'var(--textNormal)' }}>Originally, I completed a Bachelors degree in Mechanical Engineering. And then proceeded to
                not work a single day using the skills I spent 4 years at university acquiring. A couple of years
                spent doing CAD drafting work before moving into low level business analytics.
            </p>
            <p style={{ color: 'var(--textNormal)' }}>The tech stack I work with is mostly Node.Js, C#, Angular, Ionic with a
                little bit of Java and Swift thrown in for Capacitor plugin development.
                SQL Server, MySQL and MongoDB are my data stores of choice.
                I also use Microsoft Azure for all my DevOps needs.</p>
            <p style={{ color: 'var(--textNormal)' }}>My work with InterApptive focusses on mobile apps, with our current project
                being <a style={{ color: 'var(--textNormal)' }} href="https://defectwise.com.au" target="_blank">DefectWise</a></p>
            <p style={{ color: 'var(--textNormal)' }}>I write short snippets of common code that gets used a lot,
                small tips I've found whilst building stuff,
                along with some case studies of my projects and a bit about how I got here.</p>
            <Link to="/blog/">
                <Button marginTop="35px">Go to Blog</Button>
            </Link>
        </Layout>)
    }
}

export default AboutPage