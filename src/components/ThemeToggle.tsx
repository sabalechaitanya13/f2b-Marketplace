import { useEffect, useState } from "react"

function ThemeToggle() {

  const [darkMode, setDarkMode] =
    useState(false)

  useEffect(() => {

    const savedTheme =
      localStorage.getItem(
        "theme"
      )

    if (savedTheme === "dark") {

      document.documentElement.classList.add(
        "dark"
      )

      setDarkMode(true)
    }

  }, [])

  function toggleTheme() {

    if (darkMode) {

      document.documentElement.classList.remove(
        "dark"
      )

      localStorage.setItem(
        "theme",
        "light"
      )

    } else {

      document.documentElement.classList.add(
        "dark"
      )

      localStorage.setItem(
        "theme",
        "dark"
      )
    }

    setDarkMode(!darkMode)
  }

  return (

    <button
      onClick={toggleTheme}
      className="bg-gray-100 hover:bg-gray-200 px-5 py-3 rounded-2xl transition"
    >

      {darkMode ? "☀️" : "🌙"}

    </button>

  )
}

export default ThemeToggle