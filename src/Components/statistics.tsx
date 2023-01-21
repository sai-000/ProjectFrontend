import { data1 } from "../data";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Statistics() {
  const [ismobile, Setismobile] = useState(false);
  return (
    <>
      <div>
        <header>
          <nav className="navbar">
            <a href="#" className="nav-Branding">
              Order Analytics
            </a>
            <ul className={`nav-menu ${ismobile ? "active" : "inactive"}`}>
              <li className="nav-item">
                <a href="/statistics" className="nav-Link">
                  Statistics
                </a>
              </li>
              <li className="nav-item">
                <a href="/compare" className="nav-Link">
                  Compare
                </a>
              </li>
            </ul>
            <button
              className="toggler"
              onClick={() => {
                Setismobile(!ismobile);
              }}
            >
              <FaBars />
            </button>
            <div className={`toggler1`}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </header>
      </div>
      <div>
        <table className="tablediv">
          <caption>Order Analytics Table</caption>

          <tr>
            <td>
              <b> OrdersDate</b>
            </td>
            <td>
              <b>Volume</b>
            </td>
          </tr>

          {data1.map((k) => {
            return (
              <tr>
                <td>{k.OrderDate.slice(0, 10)}</td>

                <td>{k.Volume}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div></div>
    </>
  );
}
