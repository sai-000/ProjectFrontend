import { Component, ReactNode } from "react";

import './chart1table.css';
import {data} from "../data";
import { Row } from "react-bootstrap";

export default class Chart1 extends Component {
    public header=["OrderDate","Volume"];
    
  render() {
    return (<>
      <div>
        <header>
          <nav className="navbarinchart1">
            <a href="#" className="nav-Brandinginchart1">
              Order Analytics
            </a>
          </nav>
        </header>
      </div>
      <div>
        <table className="tablediv">
            <caption>Order Analytics Table</caption>
            
                <tr >
                    <td><b> OrdersDate</b></td>
                    <td><b>Volume</b></td>
                </tr>
                
            
                {data.map((k)=>{
                    return <tr><td>{k.OrderDate.slice(0,10)}</td>
                    
                    <td>{k.Volume}</td></tr>
  })}
            

        </table>
        </div></>
    );
  }
}
