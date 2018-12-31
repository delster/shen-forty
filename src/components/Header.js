import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <strong>Shenendoah</strong> <span>Thompson</span>
    </Link>
    <nav>
      <button className="menu-link no-box" onClick={props.onToggleMenu}>
        Menu
      </button>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
