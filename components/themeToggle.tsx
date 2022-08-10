import { useState, useEffect } from "react"

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState(
    document.body.dataset.theme
  ) as any
  const inactiveTheme = activeTheme === "light" ? "dark" : "light"

  useEffect(() => {
    document.body.dataset.theme = activeTheme
    window.localStorage.setItem("theme", activeTheme)
    setToggleTranslate()
  }, [activeTheme])

  const toggleOnClick = () => {
    setActiveTheme(inactiveTheme)
    setToggleTranslate()
  }

  const setToggleTranslate = () => {
    const toggleSpan = document.getElementById("toggle-span")
    if (toggleSpan) {
      if (activeTheme === "dark") {
        toggleSpan.style.transform =
          "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
      } else {
        toggleSpan.style.transform = "none"
      }
    }
  }

  return (
    <button
      aria-label={`Change to ${inactiveTheme} mode`}
      type="button"
      className="toggle-button"
      onClick={toggleOnClick}
    >
      <span id="toggle-span" className="toggle-span"></span>
      <span aria-hidden={true}>🌙</span>
      <span aria-hidden={true}>☀️</span>
    </button>
  )
}

export default ThemeToggle
