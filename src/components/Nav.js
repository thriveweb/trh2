import React from 'react'
import Link from 'gatsby-link'

import Logo from './Logo'
import NavLink from './NavLink'
import Hamburger from './Hamburger.js'

import './Nav.css'

export default ({ handlePopupOpen }) => (
  <nav className="Nav">
    <div className="Nav--Container container">
      <Link to="/">
        <Logo />
      </Link>

      <div className="right hamburger">
        <Hamburger />
      </div>

      <div className="flex menu">
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/about/" exact>
          About
        </NavLink>
        <NavLink className="services" to="" exact>
          Services <i class="fas fa-angle-down" />
          <ul className="sub-menu">
            <li>
              <Link to="/ambulatory/">Ambulatory</Link>
            </li>
            <li>
              <Link to="/treatment/">Treatment</Link>
            </li>
            <li>
              <Link to="/lameness-evaluation/">Lameness Evaluation</Link>
            </li>
            <li>
              <Link to="/performance-assessment/">
                Poor Performance Assessment
              </Link>
            </li>
            <li>
              <Link to="/routine-surgery/">Routine Surgery</Link>
            </li>
            <li>
              <Link to="/diagnostics/">Diagnostics - Radiography</Link>
            </li>
            <li>
              <Link to="/examinations/">Pre-Purchase Examinations</Link>
            </li>
          </ul>
        </NavLink>

        <NavLink to="/case-studies/" exact>
          Case Studies
        </NavLink>
        <NavLink to="/contact/" exact>
          Contact
        </NavLink>

        <a className="Button" href="tel:+61417292705">
          Call 0417 292 705
        </a>
      </div>
    </div>
  </nav>
)
