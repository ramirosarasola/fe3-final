import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

const Navbar = () => {
  const {handleThemeChange, state} = useContextGlobal()
  return (
    <nav>
      <h3 className='navbar-title'> <span className='red'>D</span>H O<span className='red'>d</span>onto</h3>
      <div className='navbar-list'>
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/favs'><h3>Favs</h3></Link>
        <Link to='/contact'><h3>Contact</h3></Link>
        <button onClick={handleThemeChange}>{state.theme === 'dark' ? 'Light' : 'Dark' }</button>
      </div>
    </nav>
  )
}

export default Navbar