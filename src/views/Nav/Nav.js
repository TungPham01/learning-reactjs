import React from "react";
import "./Nav.scss";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <a className="active" href="/">
          Home
        </a>
        <a href="/todos">Todo</a>
        <a href="/example">Example</a>
      </div>
    );
  }
}

export default Nav;
