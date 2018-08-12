
import React, { Component } from 'react'
import Link from 'gatsby-link'
import NavLink from './NavLink'

import './Hamburger.css'

import { slide as Menu } from 'react-burger-menu'

class Hamburger extends Component {
  constructor (props) {
    super(props)

    this.state = {
        hideServicesSubmenu: true,
        hideMobileMenu: true,
        menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange (state) {
      this.setState({menuOpen: state.isOpen})
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
      this.setState({menuOpen: false})
    }


  showSettings (event) {
    event.preventDefault();
  }

  toggleServicesSubmenu () {
    if (this.state.hideServicesSubmenu) {
      this.setState({hideServicesSubmenu: false})
    } else {
      this.setState({hideServicesSubmenu: true})
    }
  }

  hideSubMenu () {
    this.setState({menuOpen: false})
  }

  closeMobileMenu () {

  }

  render () {
    let state = this.state

    return (
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)} right>
            <NavLink to="/" onClick={this.hideSubMenu.bind(this)} exact>
                Home
            </NavLink>
            <NavLink to="/about/" onClick={this.hideSubMenu.bind(this)} exact>
                About
            </NavLink>
            <NavLink onClick={this.toggleServicesSubmenu.bind(this)} className="services-mobile" style={{cursor: 'default'}} exact>
                Services
                <i class="fas fa-angle-down" />
                <ul className={'mobile-sub-menu ' + (state.hideServicesSubmenu ? 'hide' : '')}>
                  <li>
                    <Link to="/ambulatory/" onClick={this.hideSubMenu.bind(this)}>Ambulatory</Link>
                  </li>
                  <li>
                    <Link to="/treatment/" onClick={this.hideSubMenu.bind(this)}>Treatment</Link>
                  </li>
                  <li>
                    <Link to="/lameness-evaluation/" onClick={this.hideSubMenu.bind(this)}>Lameness Evaluation</Link>
                  </li>
                  <li>
                    <Link to="/performance-assessment/" onClick={this.hideSubMenu.bind(this)}>
                      Poor Performance Assessment
                    </Link>
                  </li>
                  <li>
                    <Link to="/routine-surgery/" onClick={this.hideSubMenu.bind(this)}>Routine Surgery</Link>
                  </li>
                  <li>
                    <Link to="/diagnostics/" onClick={this.hideSubMenu.bind(this)}>Diagnostics - Radiography</Link>
                  </li>
                  <li>
                    <Link to="/examinations/" onClick={this.hideSubMenu.bind(this)}>Pre-Purchase Examinations</Link>
                  </li>
                </ul>
            </NavLink>
            <NavLink to="/case-studies/" onClick={this.hideSubMenu.bind(this)} exact>
                Case Studies
            </NavLink>
            <NavLink to="/contact/" onClick={this.hideSubMenu.bind(this)} exact>
                Contact
            </NavLink>

            <a className="Button mobile-button" href="+61417292705">0417 292 705</a>
        </Menu>
    );
  }
}

export default Hamburger
