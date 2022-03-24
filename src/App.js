import React from 'react'
import { Link, Outlet } from "react-router-dom";

function App() {
  const mystyle = {
    textAlign: 'center', marginTop: '40px'
  };
  return (
    <div>
      <nav style={mystyle}>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/form">Form</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
