import { Component, useEffect, useState } from "react";
import "./compare.css";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { data1 } from "../../data";
import { FaBars } from "react-icons/fa";
import { setDatasets } from "react-chartjs-2/dist/utils";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

//The Compare component takes data from backend api,stores in the local storage and displays analytics on selected Dates.
export default function Compare() {
  const [inputList, setInputList] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setInputList([...inputList, event.target.value]);
    console.log(inputList);
  };

  interface dispdata {
    OrderDate: string;
    Volume: number;
  }

  let Ddata: dispdata[] = [];
  const xaxisdata: string[] = [];
  const yaxisdata: number[] = [];

  const handlechart = () => {
    console.log("handlechart clicked");

    inputList.forEach((val) => {
      data1.forEach((obj) => {
        if (obj.OrderDate.slice(0, 10) === val) {
          Ddata.push(obj);
        }
      });
    });
    if (Ddata !== null) {
      for (var dataobj of Ddata) {
        xaxisdata.push(dataobj.OrderDate);
        yaxisdata.push(dataobj.Volume);
      }
    }

    console.log(Ddata);
  };

  var [Data, setData] = useState({
    labels: Ddata.map((e)=>
      e.OrderDate.slice(0,10)
    ),
    datasets: [
      {
        label: "Orders Volume Comparison",

        data: Ddata.map((e)=>e.Volume),
        backgroundColor: ["rgb(153, 102, 255)"],
        borderColor: ["rgb(153, 102, 255)"],
        borderWidth: 1,
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  const [ismobile, Setismobile] = useState(false);

  return (
    <div>
      <header className="heading">
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

      <br></br>
      <div className="grid-container">
        <input type="date" onChange={handleChange} />

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* {inputList.map((input, index) => <textarea><div key={index}>{input}</div></textarea>)} */}
        <textarea></textarea>

        <br></br>
        <br></br>
        <button className="comparebtn" onClick={() => handlechart()}>
          {" "}
          Compare
        </button>
      </div>

      <div className="grid-item">
        <Bar data={Data} />
      </div>
    </div>
  );
}
