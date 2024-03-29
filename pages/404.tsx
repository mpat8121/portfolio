import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
    return (
      <Layout>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that does not exist... the sadness.</p>
      </Layout>
    )
}

export default NotFoundPage
