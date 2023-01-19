import { Component } from "react";
import {useRef} from 'react';
import {FaBars,FaTimes} from "react-icons/fa";
import './navbar2.css';

export default function Nav2(){
    
    
    return(<div>
        <header>
            <h3>Welcome to Dashboard</h3>
            <nav>
                <a href="/chart1">Chart1</a>
                <a href="/chart2">Chart2</a>
                <a href="/chart3"> Chart3</a>
               
            </nav>
          
        </header>
    </div>)
}
