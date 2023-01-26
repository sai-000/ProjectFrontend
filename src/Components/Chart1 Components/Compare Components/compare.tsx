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
import { FaBars } from "react-icons/fa";
import { setDatasets } from "react-chartjs-2/dist/utils";
import ChartDisplay from "./ChartDisplay";
import { render } from "@testing-library/react";
import BoxDisplay from "./BoxDisplay";
import axios from "axios";
import NavBar1 from "../Navbar1";
import { AppState } from "../interface";
import data from "../data";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

//The Compare component takes data from backend api,stores in the local storage and displays analytics on selected Dates.

const Compare = (props: { orderList: any }) => {


  const [xaxisdata, setXData] = useState<string[]>([]);
  const [TotalOrder, setTotalorder] = useState<number[]>([]);
  const [AttemptedOrders, setAttemptedorders] = useState<number[]>([]);
  const [CompletedOrders, setCompletedOrders] = useState<number[]>([]);
  const Datapair = new Map<string, number>();

  const data1: AppState[] = props.orderList;
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
        if ((!(xaxisdata.find(xval => xval === obj.OrderDate.slice(0, 10))))) {
          setXData([...xaxisdata, obj.OrderDate.slice(0, 10)]);
          setTotalorder([...TotalOrder, obj.TotalOrders])
          setAttemptedorders([...AttemptedOrders, obj.AttemptedOrders])
          setCompletedOrders([...CompletedOrders, obj.CompletedOrders])
        }else{
          alert("Date already selected , check graph for the data");
        }
      }
    });
  };

  const [ismobile, Setismobile] = useState(false);

  return (
    <>
      <div>

        <br></br></div>
      <div className="flex-container">
        {" "}
        <div className="flex-child1">
          <div className="datepicker"><input type="date" min={data1.at(0)?.OrderDate.slice(0, 10).toString()} max={data1.at(data1.length - 1)?.OrderDate.slice(0, 10).toString()} onChange={(e) => handleChange(e)} /></div>
          <br></br>
          <br></br>
          <br></br>
          <div className="box-container">{xaxisdata.map((val: string) => (
            <div className="boxdisplay" key={val}>
              <b>{val}</b>

              <button
                type="button"
                className="button"
                onClick={() => {
                  setXData(xaxisdata.filter(obj => obj !== val))
                  data1.map((object) => {
                    if (object.OrderDate.slice(0, 10) === val) {
                      setTotalorder(TotalOrder.filter(totalorder => totalorder !== object.TotalOrders))
                      setAttemptedorders(AttemptedOrders.filter(attemptedorder => attemptedorder !== object.AttemptedOrders))
                      setAttemptedorders(CompletedOrders.filter(completededorder => completededorder !== object.CompletedOrders))
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
        <div className='flex-child2'><ChartDisplay xaxis={xaxisdata} totalorders={TotalOrder} attemptedorders={AttemptedOrders} completedorders={CompletedOrders} /> </div>
      </div></>
  );
}


export default Compare;
