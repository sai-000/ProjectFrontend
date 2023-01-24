import React, { Component } from 'react';
import Mainpage from './Mainpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chart1 from './Chart1 Components/Statistics Components/Chart1';
import Chart2 from './Chart2  Components/chart2';
import Chart3 from './Chart3 Components/chart3';
import Date_Wise_analytics from './Chart1 Components/Compare Components/compare';
import Statistics from './Chart1 Components/Statistics Components/statistics';
import Compare from './Chart1 Components/Compare Components/compare';
import ChartDisplay from './Chart1 Components/Compare Components/ChartDisplay';
//import {xaxisdata,yaxisdata} from './Components/Date_wise/compare';


// import {data} from './dummydata';


export default class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/Chart1' element={<Mainpage />}></Route>
            <Route path='/Chart1' element={<Chart1 />}></Route>
            <Route path='/chart2' element={<Chart2 />}></Route>
            <Route path='/chart3' element={<Chart3 />}></Route>
            <Route path='/statistics' element={<Chart1 />}></Route>
            <Route path='/compare' element={<Compare />}></Route>
          </Routes></BrowserRouter>
      </div>
    );
  }
}





