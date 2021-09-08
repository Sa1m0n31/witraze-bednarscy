import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './static/style/style.css'
import './static/style/mobile.css'
import Homepage from "./pages/Homepage";

function App() {
  return <Router>
    <Route exact path="/">
        <Homepage />
    </Route>
  </Router>
}

export default App;
