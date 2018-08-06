
import React, { Component } from 'react'
import Link from 'gatsby-link'
import NavLink from './NavLink'

import './Hamburger.css'

import { slide as Menu } from 'react-burger-menu'

class Hamburger extends Component {
    showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
        <Menu right>
            <NavLink to="/" exact>
                Home
            </NavLink>
            <NavLink to="/about/" exact>
                About
            </NavLink>
            <NavLink className="services-mobile" to="/Services/" style={{cursor: 'default'}} exact>
                Services
                <i class="fas fa-angle-down" />
                <ul className="mobile-sub-menu">
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
            <NavLink to="/CaseStudies/" exact>
                Case Studies
            </NavLink>
            <NavLink to="/contact/" exact>
                Contact
            </NavLink>

            <a className="Button mobile-button" href="+61417292705">0417 292 705</a>
        </Menu>
    );
  }
}

export default Hamburger
