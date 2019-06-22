import React from 'react';
import logo from './footer-logo.png';
import './footer.css';

export class Footer extends React.Component {
  render() {
    return (
      <div className="container-fluid footer--top">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-4 col-4 col-xxs-6">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">PERFORMERS</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-component="casting-search"
                    data-section="performers"
                    href="/casting/"
                  >
                    Casting Calls
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    data-component="meta"
                    data-section="performers"
                    href="/member-benefits/performers/"
                  >
                    How it Works
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-4 col-xxs-6">
              <ul className="navbar-nav mr-auto">
                <li className="title">CREATORS</li>
                <li>
                  <a
                    className="nav-link"
                    data-component="editorial"
                    data-section="creators"
                    href="/magazine/category/creators/"
                  >
                    Advice for Creators
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    data-component="post-a-job"
                    data-section="creators"
                    href="/member-benefits/creators/"
                  >
                    Post a Job
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-4 col-xxs-6">
              <ul className="navbar-nav mr-auto">
                <li className="title">COMPANY</li>
                <li>
                  <a
                    className="nav-link"
                    data-component="about-and-help"
                    data-section="company"
                    href="/about-us/"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    data-component="meta"
                    data-section="company"
                    href="/team/"
                  >
                    The Team
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    data-component="meta"
                    data-section="company"
                    href="/careers/"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-4 col-xxs-6">
              <ul className="navbar-nav mr-auto">
                <li className="title">SUPPORT</li>
                <li>
                  <a
                    className="nav-link"
                    data-component="about-and-help"
                    data-section="support"
                    href="https://backstage.zendesk.com/hc/en-us"
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    data-component="about-and-help"
                    data-section="support"
                    href="https://backstage.zendesk.com/hc/en-us/requests/new"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    data-component="subscribe-onboard"
                    data-section="support"
                    href="/subscribe/"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    data-component="meta"
                    data-section="support"
                    href="/advertising-information"
                  >
                    Advertising
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-4 col-xxs-6 connect">
              <ul className="navbar-nav mr-auto">
                <li className="title">CONNECT</li>
                <li>
                  <a
                    className="nav-link"
                    data-social="facebook"
                    data-section="connect"
                    href="https://facebook  .com/Backstage"
                  >
                    <span className="icon twitter">
                      <img src="" alt="" />
                    </span>
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    data-social="twitter"
                    data-section="connect"
                    href="https://twitter.com/Backstage"
                  >
                    <span className="icon twitter">
                      <img src="" alt="" />
                    </span>
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    data-social="instagram"
                    data-section="connect"
                    href="https://www.instagram.com/backstagecast/"
                  >
                    <span className="icon instagram">
                      <img src="" alt="" />
                    </span>
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    data-social="youtube"
                    data-section="connect"
                    href="https://www.youtube.com/user/BackStageCasting"
                  >
                    <span className="icon youtube">
                      <img src="" alt="" />
                    </span>
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    data-social="itunes_podcast"
                    data-section="connect"
                    href="https://www.backstage.com/podcasts/"
                  >
                    <span className="icon podcast">
                      <img src="" alt="" />
                    </span>
                    Podcast
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-4 col-xxs-6">
              <div className="row">
                <div className="col">
                  <ul className="navbar-nav mr-auto">
                    <li className="title">GET THE IOS APP</li>
                    <li>
                      <a
                        className="nav-link"
                        data-component="meta"
                        data-selection="GET THE IOS APP"
                        href="https://itunes.apple.com/us/app/backstage-casting/id1215380527?mt=8"
                      >
                        <img
                          src="https://d3uscstcbhvk7k.cloudfront.net/static/fe3ba3cdc48e361252f277382c48e61f.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col newsletter">
                  <form className="input-group">
                    <ul className="navbar-nav mr-auto">
                      <li className="title">GET THE NEWSLETTER</li>
                      <li>
                        <div className="form-group">
                          <input type="email" className="form-control" placeholder="Enter email" />
                        </div>
                        <button type="submit" className=" btn btn-dark" disabled="">
                          Submit
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 logo">
              <img src={logo} width="200" height="50" alt="logo" />
            </div>
          </div>
          <div className="row copyrights-text">© 2019 dramatize.com. All rights reserved</div>
        </div>
      </div>
    );
  }
}
