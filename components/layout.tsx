import React, { useState } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"

const ThemeToggle = dynamic(() => import("./themeToggle"), {
  ssr: false,
})

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
]

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="site">
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <button
              type="button"
              className={`navbar-burger${isMenuOpen ? " is-active" : ""}`}
              aria-label="menu"
              aria-expanded={isMenuOpen}
              aria-controls="navMenu"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div
            className={`navbar-menu${isMenuOpen ? " is-active" : ""}`}
            id="navMenu"
          >
            <div className="navbar-end">
              <span className="toggle">
                <ThemeToggle />
              </span>
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="navbar-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
      <main className="site-content">{children}</main>
      <footer className="footer">
        <div className="content has-text-centered">
          <span>
            © {new Date().getFullYear()}, <Link href="/">Mick Patterson</Link>
          </span>
          <div>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
