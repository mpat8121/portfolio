import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { Toggle } from "react-toggle-component"
import CookieConsent from "react-cookie-consent";

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    let header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          //marginTop: 0,
          color: 'var(--textTitle)'
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `2.625rem ${rhythm(3 / 4)}`,
          }}
        >
          <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2.625rem',
          }}
          >
            {header}
            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <label htmlFor="theme-toggle">
                  <Toggle
                    onToggle={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                    name="theme-toggle"
                    checked={theme === "dark"}
                    backgroundColor="var(--textTitle)"
                  />
                  <i className="fas fa-moon"></i>
                </label>
              )}
            </ThemeToggler>
          </header>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Mick Patterson
        </Footer>
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-analytics">
          This site uses cookies ...
        </CookieConsent>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
  color: var(--textTitle)
`

export default Layout
