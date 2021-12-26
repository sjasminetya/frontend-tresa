import React from 'react';
import IconText from '../../elements/IconText';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

export default function Header(props) {
  const getNavLinkClass = path => {
    return props.location.pathname === path ? " active" : ""
  }

  if (props.isCenter) {
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="mx-auto">
                <IconText />
              </div>
            </nav>
          </div>
        </header>
      </Fade>
    )
  } else {
    return (
      <Fade>
        <header>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <IconText />
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className={`nav-item${getNavLinkClass("/")}`}>
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                    <Link to="/browse-by" className="nav-link">
                      Browse by
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </Fade>
    )
  }
}
