//import { data1 } from "../data";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Chart1 from "./Chart1";
import NavBar from "../Navbar";


export default function Statistics() {
  const [ismobile, Setismobile] = useState(false);
  return (
    <>
      <div>
          <NavBar/>
          <Chart1/>
      </div>
    </>
  );
}
