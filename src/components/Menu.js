import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/bio">
            Bio
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/projects">
            Projects
          </Link>
        </li>
      </ul>
    </div>
    <button className="close no-box" onClick={props.onToggleMenu}>
      Close
    </button>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
