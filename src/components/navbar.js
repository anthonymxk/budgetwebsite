import React from 'react'

const Navbar = () => {
  return (
    <nav class='navbar'>
      <h1>WebsiteTitle</h1>
      <ul>
        <li>Genres</li>
        <li>Best</li>
        <li>Contact</li>
      </ul>
      <div id='searchbar'>
        <button>Search</button>
      </div>
    </nav>
  )
}

export default Navbar