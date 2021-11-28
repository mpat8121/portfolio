import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { Toggle } from "react-toggle-component"
import CookieConsent from "react-cookie-consent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

class Layout extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }

  render() {
    const { title, children } = this.props
    return (
      <Wrapper>
        <header>
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <Link className="navbar-item" to={`/`}>
                <h1 className="title is-2">{title}</h1>
              </Link>
              <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div className="navbar-menu" id="navMenu">
              <div className="navbar-end">
                <ThemeToggler >
                  {({ theme, toggleTheme }) => (
                    <label htmlFor="theme-toggle" className="mt-4">
                      <Toggle
                        onToggle={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                        name="theme-toggle"
                        checked={theme === "dark"}
                        backgroundColor="var(--text)"
                        borderColor="var(--bg)"
                        knobColor="var(--bg)"
                      />
                      <FontAwesomeIcon style={{ color: "var(--text)" }} icon={faMoon} />
                    </label>
                  )}
                </ThemeToggler>
                <Link className="navbar-item" to={`/`}>Home</Link>
                <Link className="navbar-item" to={`/about`}>About</Link>
                <Link className="navbar-item" to={`/contact`}>Contact</Link>
              </div>
            </div>
          </nav>
        </header>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            padding: `1.625rem ${rhythm(3 / 4)}`,
          }}
        >
          <section>{children}</section>
        </div>
        <footer className="footer">
          <div class="content has-text-centered">
            © {new Date().getFullYear()}, <Link style={{ color: "var(--text)" }} to={`/`}>Mick Patterson</Link>
            <div><Link style={{ color: "var(--text)" }} to={`/privacy`}>Privacy Policy</Link></div>
          </div>
        </footer>
        <CookieConsent
          // style={{ width: '94%'}}
          buttonStyle={{
            background: 'var(--consent-accept)',
            color: 'var(--consent-accept-text)'
          }}
          location="bottom"
          buttonText="Accept"
          enableDeclineButton={true}
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-analytics">
          This site uses cookies to improve your experience. Our <Link style={{ color: "var(--consent-accept-text)" }} to={`/privacy`}>Privacy Policy</Link> has more details
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
  color: var(--text)
`

export default Layout
