import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper blue-grey darken-4">
          <a className="brand-logo logo">My<span className="amber-text text-accent-4"> Notes</span></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <a className="waves-effect waves-light btn amber accent-4 radius"><i className="material-icons left">account_circle</i>Login</a>
            <a className="waves-effect waves-light btn amber accent-4 radius"><i className="material-icons left">add</i>Register</a>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;