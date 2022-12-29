import React from "react"
import { Routes, Route } from "react-router-dom"

// Components
import NavBar from "./Components/NavBar/NavBar"
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"

// Views
import Home from "./Views/Home"
import About from "./Views/About"
import Projects from "./Views/Projects"
import Contact from "./Views/Contact"

function App() {
  return (
    <>
      <NavBar />
      <ScrollToTop />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
