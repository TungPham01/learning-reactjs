import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.scss";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todos">Todo</NavLink>
        <NavLink to="/example">Example</NavLink>
        <NavLink to="/users">User</NavLink>
      </div>
    );
  }
}

export default Nav;
