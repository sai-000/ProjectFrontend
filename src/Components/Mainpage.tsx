import React, { Component, useState } from "react";
import "../css/Mainpage.css";
import { NavLink } from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa";
/*import { ToggleButton } from "react-bootstrap";*/
import { render } from "@testing-library/react";
import Navbar1 from "./Chart1 Components/Navbar1";

export default function Mainpage() {
 
  const [ismobile,Setismobile]=useState(false);
 
    return(
       <div>
        <Navbar1 />
       </div>
    )
  }
