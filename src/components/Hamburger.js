
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
            <NavLink to="/Services/" exact>
                Services
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
