import { Component, useState} from "react";
import {FaBars} from 'react-icons/fa';

//import {data1} from "./Chart1 Components/data";
import { Row } from "react-bootstrap";
import './Mainpage.css';

export default function Chart1() {
    const header=["OrderDate","Volume"];
    
    const [ismobile,Setismobile]=useState(false);
    return (<>
      <div>
        <header>
        <nav className="navbar">
     <a href="#" className="nav-Branding">Order Analytics</a>
     <ul className={`nav-menu ${ismobile ? 'active':'inactive'}`}>
      <li className="nav-item">
        <a href="/statistics" className="nav-Link">Statistics</a></li>
      <li className="nav-item">
        <a href="/compare" className="nav-Link">Compare</a>
     </li></ul>
      <button className="toggler" onClick={()=>{Setismobile(!ismobile)}}><FaBars/></button>
    <div className={`toggler1`} >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>

    </nav>
        </header>
      </div>
      </>
    );
  }

