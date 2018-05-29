import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul className='Header'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/playground'>Playground</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
