import React, { useEffect } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"

const ThemeToggle = dynamic(() => import("../components/themeToggle"), {
  ssr: false,
})

const Layout = ({ children }: any) => {
  useEffect(() => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    )
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active")
          $target?.classList.toggle("is-active")
        })
      })
    }
  }, [])

  return (
    <div style={{ minHeight: "100vh" }}>
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navMenu"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-menu" id="navMenu">
            <div className="navbar-end">
              <a className="toggle">
                <ThemeToggle />
              </a>
              <Link href={`/`}>
                <a className="navbar-item">Home</a>
              </Link>
              <Link href={`/about`}>
                <a className="navbar-item">About</a>
              </Link>
              {/* <Link href={`/contact`}>
                <a className="navbar-item">Contact</a>
              </Link> */}
            </div>
          </div>
        </nav>
      </header>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          padding: `1.625rem`,
        }}
      >
        <section>{children}</section>
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          © {new Date().getFullYear()},{" "}
          <Link href={`/`}>
            <a style={{ color: "var(--text)" }}>Mick Patterson</a>
          </Link>
          <div>
            <Link style={{ color: "var(--text)" }} href={`/privacy`}>
              <a style={{ color: "var(--text)" }}>Privacy Policy</a>
            </Link>
          </div>
        </div>
      </footer>
      
    </div>
  )
}

export default Layout
