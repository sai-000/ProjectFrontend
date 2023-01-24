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
//import { data1 } from "../data";
import {data1} from './modified_data' ;
import { FaBars } from "react-icons/fa";
import { setDatasets } from "react-chartjs-2/dist/utils";
import ChartDisplay from "./ChartDisplay";
import { render } from "@testing-library/react";
import BoxDisplay from "./BoxDisplay";
import axios from "axios";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

//The Compare component takes data from backend api,stores in the local storage and displays analytics on selected Dates.
interface Realdatatype{
Orderdate:string,
Volume:number
}
interface objtype{
  Orderdate:string,
  Volume:number
}
export default function Compare() {
  
  const [Realdata,SetRealdata]=useState([])
  const [xaxisdata,setXData] = useState<string[]>([]);
  const [yaxisdata,setYData] = useState<number[]>([]);
  const Datapair= new Map<string,number>();
  // const url='';
  // axios.get(url).then(()=>{
  //   console.log(response)
  //   SetRealdata(response)
  // }).catch((error)=>{
  //   console.log(error)
  // });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    data1.map((obj) => {
      if (obj.OrderDate.slice(0, 10) === event.target.value) {
        //SetRealdata([...Realdata,{obj}])
        // let tempmap=new Map<string,number>()
        // tempmap.set(obj.OrderDate.slice(0,10),obj.Volume)
        // Realdata.push({obj.OrderDate,obj.Volume});

        setXData([...xaxisdata,obj.OrderDate.slice(0, 10)]);
        setYData([...yaxisdata,obj.TotalOrders])
        console.log(Datapair)
      }
    });
//     const keys = xaxisdata;
// const values = yaxisdata;
// let entries:[[string,number]]
// keys.map((key, i) =>{
// entries.push([key,values[i]])
// } );
// const Datapairs = new Map<string,number>(entries);
// console.log(Datapairs)
     };
     useEffect(()=>{
      const keys =xaxisdata;
      const values = yaxisdata;
      const myMap = keys.reduce((acc, key, index) => acc.set(key, values[index]), new Map<string, number>());
      console.log(myMap);
     },[xaxisdata,yaxisdata])
  const [ismobile, Setismobile] = useState(false);
  return (<>
    <div><header className="heading">
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
  <br></br></div>
    <div className="flex-container">
      {" "}
      <div className="flex-child1">
        <div className="datepicker"><input type="date"  min='2020-02-03' max='2022-09-07' onChange={(e) => handleChange(e)} /></div>
        <br></br>
        <br></br>
        <br></br>
      <div className="box-container">{xaxisdata.map((val: string) => (
          <div className="boxdisplay"  key={val}>
            <h3>{val}</h3>

            <button
              type="button"
              className="button"
             onClick={()=>{
              setXData(xaxisdata.filter(obj=>obj!==val))
             data1.map((object)=>{
              if(object.OrderDate.slice(0,10)===val){
                setYData(yaxisdata.filter(yval=>yval!==object.TotalOrders))
              }

             })
              console.log(val)
              console.log("del button clicked");
             }} 
            >
              &times;
            </button>
            
          </div>
         
        ))}</div>
        <br></br>
        <br></br>
      </div>
    <div className='flex-child2'><ChartDisplay xaxis={xaxisdata} yaxis={yaxisdata}/> </div> 
    </div></>
  );
}
