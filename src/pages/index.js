import React from 'react';
import config from '../../config';

import Layout from '../components/Layout';
//import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Social from '../components/Social';

import hero from '../assets/images/hero.png';
import gplay from '../assets/images/google-play-badge.svg';
import astore from '../assets/images/app-store-badge.svg';
import logo from '../assets/images/robocorp-logo.png';
import logo2 from '../assets/images/logo2.png';
import process from '../assets/images/process2.png';
import robot from '../assets/images/robot.png';
import folder from '../assets/images/folder.png';
import sky from '../assets/images/sky.png';
import monkey from '../assets/images/monkey.png';
import icon1 from '../assets/images/icon1.png';
import icon2 from '../assets/images/icon2.png';

import './index.css';

const IndexPage = () => (
  <Layout>
    {/* <Header /> */}

  <div className="container d-white">

    <nav className="navbar navbar-expand-md navbar-dark d-white mt-3">
      
      <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <img src={logo2}
          className="img-fluid"
          width="200"
          alt=""
        />
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <a className="nav-link text-dark mr-3" href="#">Products</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link text-dark mr-3" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link text-dark mr-3" href="#">Link</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link text-dark mr-3" href="#">Link</a>
              </li>
              <button
                  type="button"
                  class="btn d-button2 mr-3"
                >
                  Sign in
                </button>
                <button
                  type="button"
                  class="btn d-button"
                >
                  Get started
                </button>
          </ul>
      </div>
    </nav>
  </div>

    <header className="masthead pb-5 pt-5 mt-5">
      <div className="container pb-5 pt-3 mt-3">
        <div className="row">
          <div className="col-md-5 my-auto">
            <div className=" mx-auto">

              <h1 className="mb-2 d-text1">
                BUILD AN ARMY OF
                <br />ROBOTS TODAY.
              </h1>
              
              <h2 classname="d-text3">
                <b>Software Robots</b>
              </h2>

              <button
                type="button"
                class="btn d-button mb-3"
              >
                Get started
              </button>

            </div>
          </div>
          
          <div className="col-md-7 my-auto">
            <img
              src={hero}
              className="img-fluid"
              alt=""
            />
          </div>

        </div>
      </div>
    </header>

    <section className="d-white download text-center pt-5 pb-5 mb-0" id="download">
      <div className="container">
        <div className="row">

          <div className="col-lg-6 mx-auto">

            <div className="badges">
              <img src={process} alt="" />
            </div>
          </div>

          <div className="col-lg-6 mx-auto">
            <p className="mb-4 d-text1">
              Frictionless tools that are built for developers
            </p>
            <h3 className="d-text3">
              Our tools are built to support development workflows, however you wish to use them.
            </h3>
          </div>

        </div>
      </div>
    </section>

    <section className="d-white download text-center pt-5 pb-5 mb-0" id="download">
      <div className="container">
        <div className="row">

        <div className="col-lg-6 mx-auto">
            <p className="mb-4 d-text1">
              Open for sharing and collaboration
            </p>
            <h3 className="d-text3">
              Leveraging Robot Framework, Python, VSCode, and the Jupyter ecosystems. Code is best when shared together.
            </h3>
            <div className="badges">

            </div>
          </div>

          <div className="col-lg-6 mx-auto">

            <div className="badges">
              <img src={folder} alt="" />
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="d-white download text-center pt-5 pb-5" id="download">
      <div className="container">
        <div className="row">

          <div className="col-lg-6 mx-auto">

            <div className="badges">
              <img src={robot} alt="" />
            </div>
          </div>

          <div className="col-lg-6 mx-auto">
            <p className="mb-4 d-text1">
              Fast and easy to deploy
            </p>
            <h3 className="d-text3">
              When you’ve built your software robot, Robocloud will enable you to deploy it in the real world in minutes.
            </h3>
            <div className="badges">

            </div>
          </div>

        </div>
      </div>
    </section>




    <section className="d-white d-image text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">


          <h3 className="text-white d-text5 mb-4">
              START YOUR SOFTWARE ROBOT DEVELOPER JOURNEY
            </h3>
          
          <div className="card d-card2 text-white mb-4">
              
              <div className="card-body">

              <img src={monkey}
                className="img-fluid mb-3 mt-2"
                width="120"
                alt=""
              />

                <h1 classname="">Learn in Robohub</h1>
                <p className="">Open-source developer tools for building software Robots.</p>
                <button
                  type="button"
                  class="btn d-button2 mr-3"
                >
                  Get started
                </button>
              </div>
            </div>
            
        <div className="row">

          <div className="col-sm mx-auto">
            <div className="card d-card3 text-white mb-3">
              
              <div className="card-body">

              <img src={icon1}
                className="img-fluid mb-3"
                width="64"
                alt=""
              />

                <h3 classname="d-text">Build with Robocode</h3>
                <p className="card-text">Open-source developer tools for building software Robots.</p>
                <button
                  type="button"
                  class="btn d-button2 mr-3"
                >
                  Download Robocode Lab
                </button>
              </div>
            </div>
          </div>

        <div className="col-sm mx-auto">
          <div className="card d-card3 text-white">
              
              <div className="card-body">

              <img src={icon2}
                className="img-fluid mb-3"
                width="64"
                alt=""
              />

              <h3 classname="d-text">Run in Robocloud</h3>
                <p className="card-text">Operate and run software robots anywhere with minimum setup.</p>
                <button
                  type="button"
                  class="btn d-button2 mr-3"
                >
                  Create account
                </button>
              </div>
          </div>
        </div>

        </div>
      </div>
      </div>
      </div>
    </section>

    <section className="contact d-color text-white" id="contact">
      <div className="container">
        <h2>
          Get the latest updates from us
          {/* <i className="fas fa-heart"></i> */}
        </h2>
        {/* <Social /> */}

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span
              class="input-group-text"
              id="basic-addon1"
            >Send
            </span>
          </div>
          <input
            type="text"
            
            className="form-control d-width"

            placeholder="Enter your email address here"
            aria-label="Enter your email address here"
          />
        </div>

      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
