import React, { Component } from "react";
import "./navbar.css";
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return <div> <nav className="navbar">
      <div><h1>Dashboard</h1></div>
      <a className="nav a" href="/chart1"> Chart1</a>
      <a className="nav a" href="/chart2"> Chart2</a>
      <a className="nav a" href="/chart3">Chart3</a>
    
  </nav></div>;
  }
}
