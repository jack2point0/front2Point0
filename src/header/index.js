import React, { Component } from 'react';
import AuthService from '../_API/services';
import './styles.css'

class Header extends Component {
  constructor(props) {
    super(props)

    this.auth = new AuthService()
    this.state = {
      hamburger: 25,
      width: 0,
      marginRight: 10
    }
  }

  render() {
    return (
      <main className="headerDiv navbar">
        <section className="logoContainer">
          <div>
            <a className="logo" href="/">
              <i className="fas fa-arrow-alt-circle-up fa-2x"></i>wn-Up Grown-Up</a>
          </div>
        </section>
        <section className="smallLogoContainer">
          <div>
            <a className="logo" href="/">
              <i className="fas fa-arrow-alt-circle-up fa-2x">
              </i>wn-Up
            </a>
          </div>
        </section>
        <nav>
          <div>
            <div className="navContainer openSlide openSlideMenu" style={{width: this.state.hamburger, marginRight: this.state.marginRight}}>
              <div href="#" onClick={() => this.openSlideMenu()}>
                <i className="fas fa-bars fa-2x"></i>
              </div>
            </div>
            {this.auth.loggedIn()
              ? <section className="navContainer navbar-nav">
                <div className="navBarLink">
                  <a href="/">
                    DASHBOARD
                  </a>
                </div>
                <div className="navBarLink">
                  <a href='/tasks'>
                    ADD TASKS
                  </a>
                </div>
                <div className="navBarLink">
                  <a href='/profile'>
                    SETTINGS
                  </a>
                </div>
                <div className="navBarLink">
                  <a href='/instructions'>
                    INSTRUCTIONS
                  </a>
                </div>
                <div className="navBarLink logoutLink">
                  <a onClick={this.handleClick} href="/">
                    LOGOUT
                  </a>
                </div>
              </section>
              : <section className="nav navContainer navbar-nav">
                <div className="navBarLink homeLink">
                  <a href="/">
                    HOME
                  </a>
                </div>
              </section>
          }
          </div>
          <div>
            {this.auth.loggedIn()
              ? <section style={{width: this.state.width}} className="navContainer sideNav">
                <a href="#" className="btn-close" onClick={() => this.openSlideMenu()}>&times;</a>
                <div className="sideNavLink">
                  <a href="/">
                    DASHBOARD
                  </a>
                </div>
                <div className="sideNavLink">
                  <a href='/tasks'>
                    ADD TASKS
                  </a>
                </div>
                <div className="sideNavLink">
                  <a href='/profile'>
                    SETTINGS
                  </a>
                </div>
                <div className="sideNavLink">
                  <a href='/instructions'>
                    INSTRUCTIONS
                  </a>
                </div>
                <div className="sideNavLink">
                  <a onClick={this.handleClick} href="/">
                    LOGOUT
                  </a>
                </div>
              </section>
              : <section style={{width: this.state.width}} className="navContainer sideNav">
              <a href="#" className="btn-close" onClick={() => this.openSlideMenu()}>&times;</a>
                <div className="sideNavLink">
                  <a href="/">
                    HOME
                  </a>
                </div>
              </section>
          }
          </div>
        </nav>
      </main>
    );
  }

  openSlideMenu = () => {
    let { marginRight, width, hamburger, transitionDelay } = this.state
    marginRight = marginRight === 10 ? -40 : 10
    hamburger = hamburger === 0 ? 25 : 0
    width = width === 0 ? 200 : 0
    transitionDelay = transitionDelay === 0 ? 0.6 : 0
    this.setState({
      marginRight: marginRight,
      width: width,
      hamburger: hamburger,
      transitionDelay: transitionDelay,
    })
    this.props.openSideMenu()
  }

  handleClick = () => {
    this.auth.logout();
  }
}

export default Header;
