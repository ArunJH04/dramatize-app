import React from 'react';
import logo from './logo-final1.png';
import './header.css';

export class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bottom-nav">
          <a className="navbar-brand">
            <img src={logo} width="200" height="50" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <button className="btn btn-sm btn-outline-secondary" type="button">
                  Creators
                </button>
              </li>
              <li className="nav-item active">
                <button className="btn btn-sm btn-outline-secondary" type="button">
                  Performers
                </button>
              </li>
              <li className="nav-item active">
                <button className="btn btn-sm btn-outline-secondary" type="button">
                  Casting Calls
                </button>
              </li>
            </ul>
            <div className=" my-2 my-lg-0">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <button className="btn btn-sm btn-outline-secondary" type="button">
                    Sign In
                  </button>
                </li>
                <li className="nav-item active">
                  <button className="btn btn-sm btn-outline-secondary" type="button">
                    Post a Job
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
