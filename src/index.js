import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"

// From theme
import GlobalStyle from "./Theme/GlobalTheme"
import Typography from "./Theme/Typography"

import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <>
    <Router>
      <GlobalStyle />
      <Typography />
      <App />
    </Router>
  </>
)
