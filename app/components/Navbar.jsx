import React, { Component } from 'react';

export default class Navbar extends Component {
    render () {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">Twitter.js</a>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="/">Home</a></li>
                  <li><a href="#about">@ Connect</a></li>
                  <li><a href="#contact"># Discover</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Settings <b className="caret"></b></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>            
        )
    }
};