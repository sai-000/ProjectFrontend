import React, { Component, useState } from "react";
import "./navbar.css";
import { NavLink } from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa";
import { ToggleButton } from "react-bootstrap";
import { render } from "@testing-library/react";

export default function Nav() {
 
  const [ismobile,Setismobile]=useState(false);
 
    return <><header>
    <nav className="navbar">
     <a href="#" className="nav-Branding">Welcome To Dashboard</a>
     <ul className={`nav-menu ${ismobile ? 'active':'inactive'}`}>
      <li className="nav-item">
        <a href="/chart1" className="nav-Link">Chart1</a></li>
      <li className="nav-item">
        <a href="/chart2" className="nav-Link">Chart2</a>
      </li>
      <li className="nav-item">
        <a href="/chart3" className="nav-Link">Chart3</a>
      </li></ul>
      <button className="toggler" onClick={()=>{Setismobile(!ismobile)}}><FaBars/></button>
    <div className={`toggler1`} >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>

    </nav>
    </header>
    </>
  }
