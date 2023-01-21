import React,{ Component } from 'react';
import Nav from './Components/Navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chart1 from './Components/Chart1';
import Chart2 from './Components/chart2';
import Chart3 from './Components/chart3';
import Date_Wise_analytics from './Components/Date_wise/compare';
import Statistics from './Components/statistics';
import Compare from './Components/Date_wise/compare';


// import {data} from './dummydata';


export default class App extends Component {
  
  render() {
    return (
      <div className="App">
<BrowserRouter>
<Routes>
  <Route path='/' element={<Nav/>}></Route>
    <Route path='/Chart1' element={<Compare/>}></Route>
    <Route path='/chart2' element={<Chart2/>}></Route>
    <Route path='/chart3' element={<Chart3/>}></Route>
    <Route path='/statistics' element={<Statistics/>}></Route>
    <Route path='/compare' element={<Compare/>}></Route>

  
  </Routes></BrowserRouter>
      </div>
    );
  }
}





