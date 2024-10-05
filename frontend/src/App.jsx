import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles/App.css'

function App() {

  return (
    <>
      <Router>
        <Route path='/' exact>
          <h1>Home</h1>

        </Route>
      </Router>
    </>
  )
}

export default App
