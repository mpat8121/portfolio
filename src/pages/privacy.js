import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo"

class PrivacyPage extends React.Component {

    render() {
        console.log(this.props);
        return (
            <Layout location={this.props.location}>
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
                <h3 style={{ color: 'var(--textNormal)' }}>Data Collection</h3>
                <p style={{ color: 'var(--textNormal)' }}>We may collect the following information:</p>
                <ul style={{ color: 'var(--textNormal)' }}>
                    <li>Contact information including name and email address.</li>
                    <li>Demographic information such as IP address, location, technology, preferences and interests.</li>
                    <li>Other information relevant to user preferences.</li>
                </ul>
                <h3 style={{ color: 'var(--textNormal)' }}>Contact Form</h3>
                <p style={{ color: 'var(--textNormal)' }}>Data Used: The contact form submission data — IP address, user agent, name,
                    email address, and message — is submitted to the Netlify service for the
                    sole purpose of spam checking.</p>
                <h3 style={{ color: 'var(--textNormal)' }}>Links To Other Websites</h3>
                <p style={{ color: 'var(--textNormal)' }}>This website may contain links to other
                    websites of interest. However, once you have used these links to leave the site,
                    you should note that we do not have any control over that other website.
                    Therefore, we cannot be responsible for the protection and privacy of any
                    information which you provide whilst visiting such sites and such sites are not
                    governed by this privacy statement. You should exercise caution and look at the
                    privacy statement applicable to the website in question.</p>
                <h3 style={{ color: 'var(--textNormal)' }}>Amazon Affiliate Links</h3>
                <p style={{ color: 'var(--textNormal)' }}>This website is a participant in the Amazon Services LLC Associates Program,
                    an affiliate advertising program designed to provide a means for sites to earn
                    advertising fees by advertising and linking to amazon.com. Amazon offers a small
                    commission on products sold through their affiliate links. Each of your purchases
                    via our Amazon affiliation links supports our cause at no additional cost to you.</p>
                <h3 style={{ color: 'var(--textNormal)' }}>Google Analytics</h3>
                <p style={{ color: 'var(--textNormal)' }}>Google Analytics tracks Website usage and
                    provides information such as referring websites and user actions on the Website.
                    Google Analytics may capture your IP address, but no other personal information is
                    captured by Google Analytics.</p>
                <h3 style={{ color: 'var(--textNormal)' }}>Cookies</h3>
                <p style={{ color: 'var(--textNormal)' }}>We may log information using cookies, which are small data
                    files stored on your browser by the Website. We may use both session cookies, which expire when you
                    close your browser, and persistent cookies, which stay on your browser until deleted, to provide
                    you with a more personalized experience on the Website.</p>
            </Layout>
        )
    }
}

export default PrivacyPage