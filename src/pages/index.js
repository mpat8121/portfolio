import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "";

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `angular`, `javascript`, `ionic`, `nodejs`]}
        />
        <img style={{ margin: 0 }} src="./GreenBanner.jpg" alt="Green Banner" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my blog!</p>
        <p>
          Who am I?
        </p>
        <p>I'm a fullstack dev who has been working for the same small IT shop in Sydney, Australia for more than 10 years...<br/>
        I also run <a href="https://www.interapptive.com.au" target="_blank">Interapptive</a> on the side for funsies.</p>
        <p>My tech stack is mostly Node.Js, C#, Angular, Ionic with a little bit of Java and Swift thrown in for Capacitor plugin development. SQL Server, MySQL and MongoDB are my data stores of choice. 
          I also use Azure for all my DevOps needs.</p>
        <p>My work with InterApptive focusses on mobile apps, with our current project being <a href="https://defectwise.com.au" target="_blank">DefectWise</a></p>
        <p>This blog is short snippets of utility functions I use often, small tips I've found whilst building stuff, along with some case studies of my projects.</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
