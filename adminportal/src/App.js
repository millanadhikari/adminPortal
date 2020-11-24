import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Main from './Components/Main'
import './App.css'
import Entry from './Components/Entry'






function App() {
  return (
    <div className="app">
    <Router>
      <Sidebar />
      <Route path='/' component={Main} />
    </Router>
  </div>

  )
}

export default App;
