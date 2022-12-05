import React from "react"
import { Routes, Route } from "react-router-dom"

// Components
import NavBar from "./Components/NavBar/NavBar"
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"

// Views
import Home from "./Views/Home"

function App() {
  return (
    <>
      <NavBar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
