import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo"

class PrivacyPage extends React.Component {

    render() {
        console.log(this.props);
        return (
            <Layout>
                <SEO title="All posts"
                    keywords={
                        [
                            `blog`, `angular`, `javascript`, `ionic`, `nodejs`, `sql`,
                            `mongo`, `sql server`, `c#`
                        ]}
                />
                <h1 style={{ color: 'var(--textNormal)' }}>
                    Privacy Policy
                </h1>
                <p style={{ color: 'var(--textNormal)' }}>This privacy policy sets out how this website uses and protects any information that you give while using it.</p>
                <p style={{ color: 'var(--textNormal)' }}></p>
            </Layout>
        )
    }
}

export default PrivacyPage