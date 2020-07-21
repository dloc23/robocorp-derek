import React, { Component } from 'react';
import config from '../../config';
import hero from '../assets/images/hero.png';
import gplay from '../assets/images/google-play-badge.svg';
import logo from '../assets/images/favicon.png';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: '',
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };

  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== 'navbar-shrink') {
        this.setState({ visibilityClass: 'navbar-shrink' });
      }
    } else {
      if (visibilityClass === 'navbar-shrink') {
        this.setState({ visibilityClass: '' });
      }
    }
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            {/* {config.siteTitle} */}
            {/* <img src={gplay} alt="" /> */}
            <img src={logo} alt="" />
            {config.siteTitle}
            {/* <img src={hero} className="img-fluid" alt="" /> */}
          </a>

          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">

                  <a className="nav-link d-purple" href="#download">
                    Products
                  </a>

              </li>
              <li className="nav-item">

                  <a className="nav-link" href="#features">
                    Pricing
                  </a>

              </li>
              <li className="nav-item">

                  <a className="nav-link" href="#contact">
                    Company
                  </a>

              </li>
              <li className="nav-item">

                  <a className="nav-link" href="#contact">
                    Careers
                  </a>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
