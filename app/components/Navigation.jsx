let React = require('react');
let {Link, IndexLink} = require('react-router');

let Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="http://danielcharman.com" target="blank">Daniel Charman</a>
        </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;
