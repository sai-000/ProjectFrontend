import React, { useState, useEffect } from 'react';
import Mainpage from './Mainpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chart1 from './Chart1 Components/Statistics Components/Chart1';
import Chart2 from './Chart2  Components/chart2';
import Chart3 from './Chart3 Components/chart3';
import Date_Wise_analytics from './Chart1 Components/Compare Components/compare';
import Compare from './Chart1 Components/Compare Components/compare';
import ChartDisplay from './Chart1 Components/Compare Components/ChartDisplay';
import axios from 'axios';
//import {xaxisdata,yaxisdata} from './Components/Date_wise/compare';


// import {data} from './dummydata';

export default function App() {
  const [list, SetList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/OrderTrends/days/900")
      .then((res) => {
        console.log("API called");
        SetList(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Chart1 orderList={list} />}></Route>
          <Route path='/Chart1' element={<Chart1 orderList={list} />}></Route>
          <Route path='/statistics' element={<Chart1 orderList={list} />}></Route>
          <Route path='/Chart2' element={<Chart2 />}></Route>
          <Route path='/Chart3' element={<Chart3 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}





