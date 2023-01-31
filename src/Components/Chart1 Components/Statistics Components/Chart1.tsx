import React, { Component, useEffect, useState, useRef } from 'react';
import "./Chart1.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Chart from 'chart.js/auto';
import 'bootstrap/dist/css/bootstrap.css';
import { Bar, Line, Pie } from 'react-chartjs-2';
// import data1 from '../data';
import './App.css';
// import { AppProps } from './interface';
import { AppState, Monthly, Weekly } from '../interface';
import NavBar from '../Navbar1';
import Compare from '../Compare Components/compare';
import { useMountedLayoutEffect } from 'react-table';
import axios from 'axios';
<<<<<<< HEAD
import { FaDailymotion } from 'react-icons/fa';
=======
import ReactDOM from 'react-dom';
>>>>>>> 7446fe0e7a5fdc631afb894d13a7b8f24454c18f





ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
    },
  },
};


const Chart1 = (props: { orderList: AppState[] }) => {

  const [isCompare, setCompare] = useState(true);

  const data1: AppState[] = props.orderList;
<<<<<<< HEAD

  let monthly: Monthly[] = [];

  var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  var flag = 1;
  var x: any = [{}];
  var y: any = [{}];
  var z: any = [{}];
  var dataByMonth = data1.reduce(function (dataByMonth, datum) {
    var date = new Date(datum.OrderDate);
    var Orders = datum.TotalOrders;
    var Orders1 = datum.AttemptedOrders;
    var Orders2 = datum.CompletedOrders;
    var month = monthNames[date.getMonth()];
    var year = ('' + date.getFullYear()).slice(-2);
    var group = month + '\'' + year;

    x[group] = (x[group] || 0) + Orders;
    y[group] = (y[group] || 0) + Orders1;
    z[group] = (z[group] || 0) + Orders2;    

    return x;

  }, {});
  

 
  var finalResult = Object.keys(dataByMonth).map(function (group) {
    return { Month: group, TotalOrders: x[group], AttemptedOrders: y[group], CompletedOrders: z[group] };
  });

  finalResult.reverse();
  console.log(finalResult);  

  let weekly: Weekly[] = [];



=======


>>>>>>> 7446fe0e7a5fdc631afb894d13a7b8f24454c18f
  var first15 = data1.filter(function (el, index) {
    return index >= data1.length - 15;
  });


  var first30 = data1.filter(function (el, index) {
    return index >= data1.length - 30;
  });

  var first60 = data1.filter(function (el, index) {
    return index >= data1.length - 60;
  });

  var first90 = data1.filter(function (el, index) {
    return index >= data1.length - 90;
  });

  var first180 = data1.filter(function (el, index) {
    return index >= data1.length - 180;
  });

  var first365 = data1.filter(function (el, index) {
    return index >= data1.length - 365;
  });

  var first856 = data1.filter(function (el, index) {
    return index >= data1.length - 856;
  });


  var Ddata: AppState[] = [];

  useEffect(() => {
    console.log('called update function')
    update(30)
  }, [props.orderList]);
<<<<<<< HEAD

  function update(num: Number) {
    if(flag==1){
=======

  const [is865,Set865] = useState(false);
  const [is365,Set365] = useState(false);
  const [is180,Set180] = useState(false);
  const [is90,Set90] = useState(false);
  const [is60,Set60] = useState(false);
  const [is30,Set30] = useState(false);
  const [is15,Set15] = useState(false);

  function update(num: Number) {
    Set15(false);
    Set30(false);
    Set60(false);
    Set90(false);
    Set180(false);
    Set365(false);
    Set865(false);

>>>>>>> 7446fe0e7a5fdc631afb894d13a7b8f24454c18f
    switch (num) {
      case 15:
        Set15(true);
        Ddata.length = 0;
        for (let i = 0; i < first15.length; i++) {
          Ddata.push(first15[i]);
        }
        var a = {
          labels: Ddata.map((item) => item.OrderDate.slice(0, 10)),
          datasets: [
            {
              label: 'AttemptedOrders',
              data: Ddata.map((item) => item.AttemptedOrders),
              borderColor: '#FA8231',
              backgroundColor: '#FA8231',
            },
            {
              label: 'CompletedOrders',
              data: Ddata.map((item) => item.CompletedOrders),
              borderColor: '#3C40C6',
              backgroundColor: '#3C40C6',
            },
            {
              label: 'TotalOrders',
              data: Ddata.map((item) => item.TotalOrders),
              borderColor: '#55B74E',
              backgroundColor: '#55B74E',
            },
          ],
        }
        setData(a);
        break;
      case 30:
        Set30(true);
        Ddata.length = 0;
        for (let i = 0; i < first30.length; i++) {
          Ddata.push(first30[i]);
        }
        var b = {
          labels: Ddata.map((item) => item.OrderDate.slice(0, 10)),
          datasets: [
            {
              label: 'AttemptedOrders',
              data: Ddata.map((item) => item.AttemptedOrders),
              borderColor: '#FA8231',
              backgroundColor: '#FA8231',
            },
            {
              label: 'CompletedOrders',
              data: Ddata.map((item) => item.CompletedOrders),
              borderColor: '#3C40C6',
              backgroundColor: '#3C40C6',
            },
            {
              label: 'TotalOrders',
              data: Ddata.map((item) => item.TotalOrders),
              borderColor: '#55B74E',
              backgroundColor: '#55B74E',
            },
          ],
        }
        setData(b);
        break;
      case 60:
        Set60(true);
        Ddata.length = 0;
        for (let i = 0; i < first60.length; i++) {
          Ddata.push(first60[i]);
        }
        var c = {
          labels: Ddata.map((item) => item.OrderDate.slice(0, 10)),
          datasets: [
            {
              label: 'AttemptedOrders',
              data: Ddata.map((item) => item.AttemptedOrders),
              borderColor: '#FA8231',
              backgroundColor: '#FA8231',
            },
            {
              label: 'CompletedOrders',
              data: Ddata.map((item) => item.CompletedOrders),
              borderColor: '#3C40C6',
              backgroundColor: '#3C40C6',
            },
            {
              label: 'TotalOrders',
              data: Ddata.map((item) => item.TotalOrders),
              borderColor: '#55B74E',
              backgroundColor: '#55B74E',
            },
          ],
        }
        setData(c);
        break;
      case 90:
        Set90(true);
        Ddata.length = 0;
        for (let i = 0; i < first90.length; i++) {
          Ddata.push(first90[i]);
        }
        var d = {
          labels: Ddata.map((item) => item.OrderDate.slice(0, 10)),
          datasets: [
            {
              label: 'AttemptedOrders',
              data: Ddata.map((item) => item.AttemptedOrders),
              borderColor: '#FA8231',
              backgroundColor: '#FA8231',
            },
            {
              label: 'CompletedOrders',
              data: Ddata.map((item) => item.CompletedOrders),
              borderColor: '#3C40C6',
              backgroundColor: '#3C40C6',
            },
            {
              label: 'TotalOrders',
              data: Ddata.map((item) => item.TotalOrders),
              borderColor: '#55B74E',
              backgroundColor: '#55B74E',
            },
          ],
        }
        setData(d);
        break;
      case 180:
        Set180(true);
        Ddata.length = 0;
        for (let i = 0; i < first180.length; i++) {
          Ddata.push(first180[i]);
        }
        var e = {
          labels: Ddata.map((item) => item.OrderDate.slice(0, 10)),
          datasets: [
            {
              label: 'AttemptedOrders',
              data: Ddata.map((item) => item.AttemptedOrders),
              borderColor: '#FA8231',
              backgroundColor: '#FA8231',
            },
            {
              label: 'CompletedOrders',
              data: Ddata.map((item) => item.CompletedOrders),
              borderColor: '#3C40C6',
              backgroundColor: '#3C40C6',
            },
            {
              label: 'TotalOrders',
              data: Ddata.map((item) => item.TotalOrders),
              borderColor: '#55B74E',
              backgroundColor: '#55B74E',
            },
          ],
        }
        setData(e);
        break;
      case 365:
        Set365(true);
        Ddata.length = 0;
        for (let i = 0; i < first365.length; i++) {
          Ddata.push(first365[i]);
        }
        var f = {
          labels: Ddata.map((item) => item.OrderDate.slice(0, 10)),
          datasets: [
            {
              label: 'AttemptedOrders',
              data: Ddata.map((item) => item.AttemptedOrders),
              borderColor: '#FA8231',
              backgroundColor: '#FA8231',
            },
            {
              label: 'CompletedOrders',
              data: Ddata.map((item) => item.CompletedOrders),
              borderColor: '#3C40C6',
              backgroundColor: '#3C40C6',
            },
            {
              label: 'TotalOrders',
              data: Ddata.map((item) => item.TotalOrders),
              borderColor: '#55B74E',
              backgroundColor: '#55B74E',
            },
          ],
        }
        setData(f);
        break;
      case 856:
        Set865(true);
        Ddata.length = 0;
        for (let i = 0; i < first856.length; i++) {
          Ddata.push(first856[i]);
        }
        var g = {
          labels: Ddata.map((item) => item.OrderDate.slice(0, 10)),
          datasets: [
            {
              label: 'AttemptedOrders',
              data: Ddata.map((item) => item.AttemptedOrders),
              borderColor: '#FA8231',
              backgroundColor: '#FA8231',
            },
            {
              label: 'CompletedOrders',
              data: Ddata.map((item) => item.CompletedOrders),
              borderColor: '#3C40C6',
              backgroundColor: '#3C40C6',
            },
            {
              label: 'TotalOrders',
              data: Ddata.map((item) => item.TotalOrders),
              borderColor: '#55B74E',
              backgroundColor: '#55B74E',
            },
          ],
        }
        setData(g);
        break;
    }
  }
  if(flag==1){
    switch (num) {
        case 30:
          monthly.length = 0;
          {
            monthly.push(finalResult[0]);
          }
          var h = {
            labels: monthly.map((item) => item.Month),
            datasets: [
              {
                label: 'AttemptedOrders',
                data: monthly.map((item) => item.AttemptedOrders),
                borderColor: '#FA8231',
                backgroundColor: '#FA8231',
              },
              {
                label: 'CompletedOrders',
                data: monthly.map((item) => item.CompletedOrders),
                borderColor: '#3C40C6',
                backgroundColor: '#3C40C6',
              },
              {
                label: 'TotalOrders',
                data: monthly.map((item) => item.TotalOrders),
                borderColor: '#55B74E',
                backgroundColor: '#55B74E',
              },
            ],
          }
          setMonth(h);
          break;
      case 60:
        monthly.length = 0;
       for(var z=0;z<=1;z++) {
          monthly.push(finalResult[z]);
        }
        var i = {
          labels: monthly.map((item) => item.Month),
          datasets: [
            {
              label: 'AttemptedOrders',
              data: monthly.map((item) => item.AttemptedOrders),
              borderColor: '#FA8231',
              backgroundColor: '#FA8231',
            },
            {
              label: 'CompletedOrders',
              data: monthly.map((item) => item.CompletedOrders),
              borderColor: '#3C40C6',
              backgroundColor: '#3C40C6',
            },
            {
              label: 'TotalOrders',
              data: monthly.map((item) => item.TotalOrders),
              borderColor: '#55B74E',
              backgroundColor: '#55B74E',
            },
          ],
        }
        setMonth(i);
        break;
      case 90:
        monthly.length = 0;
        for(var z=0;z<=2;z++) {
          monthly.push(finalResult[z]);
        }
        var j = {
          labels: monthly.map((item) => item.Month),
          datasets: [
            {
              label: 'AttemptedOrders',
              data: monthly.map((item) => item.AttemptedOrders),
              borderColor: '#FA8231',
              backgroundColor: '#FA8231',
            },
            {
              label: 'CompletedOrders',
              data: monthly.map((item) => item.CompletedOrders),
              borderColor: '#3C40C6',
              backgroundColor: '#3C40C6',
            },
            {
              label: 'TotalOrders',
              data: monthly.map((item) => item.TotalOrders),
              borderColor: '#55B74E',
              backgroundColor: '#55B74E',
            },
          ],
        }
        setMonth(j);
        break;
      case 180:
        monthly.length = 0;
        for(var z=0;z<=5;z++) {
          monthly.push(finalResult[z]);
        }
        var k = {
          labels: monthly.map((item) => item.Month),
          datasets: [
            {
              label: 'AttemptedOrders',
              data: monthly.map((item) => item.AttemptedOrders),
              borderColor: '#FA8231',
              backgroundColor: '#FA8231',
            },
            {
              label: 'CompletedOrders',
              data: monthly.map((item) => item.CompletedOrders),
              borderColor: '#3C40C6',
              backgroundColor: '#3C40C6',
            },
            {
              label: 'TotalOrders',
              data: monthly.map((item) => item.TotalOrders),
              borderColor: '#55B74E',
              backgroundColor: '#55B74E',
            },
          ],
        }
        setMonth(k);
        break;
      case 365:
        monthly.length = 0;
        for(var z=0;z<=11;z++) {
          monthly.push(finalResult[z]);
        }
        var l = {
          labels: monthly.map((item) => item.Month),
          datasets: [
            {
              label: 'AttemptedOrders',
              data: monthly.map((item) => item.AttemptedOrders),
              borderColor: '#FA8231',
              backgroundColor: '#FA8231',
            },
            {
              label: 'CompletedOrders',
              data: monthly.map((item) => item.CompletedOrders),
              borderColor: '#3C40C6',
              backgroundColor: '#3C40C6',
            },
            {
              label: 'TotalOrders',
              data: monthly.map((item) => item.TotalOrders),
              borderColor: '#55B74E',
              backgroundColor: '#55B74E',
            },
          ],
        }
        setMonth(l);
        break;
      case 856:
        Ddata.length = 0;
        for(var z=0;z<=finalResult.length-1;z++) {
          monthly.push(finalResult[z]);
        }
        var m = {
          labels: monthly.map((item) => item.Month),
          datasets: [
            {
              label: 'AttemptedOrders',
              data: monthly.map((item) => item.AttemptedOrders),
              borderColor: '#FA8231',
              backgroundColor: '#FA8231',
            },
            {
              label: 'CompletedOrders',
              data: monthly.map((item) => item.CompletedOrders),
              borderColor: '#3C40C6',
              backgroundColor: '#3C40C6',
            },
            {
              label: 'TotalOrders',
              data: monthly.map((item) => item.TotalOrders),
              borderColor: '#55B74E',
              backgroundColor: '#55B74E',
            },
          ],
        }
        setMonth(m);
        break;
    }

  }

<<<<<<< HEAD
=======
  for (var i = 0; i < first30.length; i++) {
    Ddata.push(first30[i]);
>>>>>>> 7446fe0e7a5fdc631afb894d13a7b8f24454c18f
  }





  var [data, setData] = useState({
    labels: Ddata.map((item) => item.OrderDate.slice(0, 10)),
    datasets: [
      {
        label: 'AttemptedOrders',
        data: Ddata.map((item) => item.AttemptedOrders),
        borderColor: '#FA8231',
        backgroundColor: '#FA8231',
      },
      {
        label: 'CompletedOrders',
        data: Ddata.map((item) => item.CompletedOrders),
        borderColor: '#3C40C6',
        backgroundColor: '#3C40C6',
      },
      {
        label: 'TotalOrders',
        data: Ddata.map((item) => item.TotalOrders),
        borderColor: '#55B74E',
        backgroundColor: '#55B74E',
      },
    ],
  });

<<<<<<< HEAD
  var [month, setMonth] = useState({
    labels: monthly.reverse().map((item) => item.Month),
    datasets: [
      {
        label: 'AttemptedOrders',
        data: monthly.map((item) => item.AttemptedOrders),
        borderColor: '#FA8231',
        backgroundColor: '#FA8231',
      },
      {
        label: 'CompletedOrders',
        data: monthly.map((item) => item.CompletedOrders),
        borderColor: '#3C40C6',
        backgroundColor: '#3C40C6',
      },
      {
        label: 'TotalOrders',
        data: monthly.map((item) => item.TotalOrders),
        borderColor: '#55B74E',
        backgroundColor: '#55B74E',
      },
    ],
  });

  var [week, setWeek] = useState({
    labels: monthly.reverse().map((item) => item.Month),
    datasets: [
      {
        label: 'AttemptedOrders',
        data: monthly.map((item) => item.AttemptedOrders),
        borderColor: '#FA8231',
        backgroundColor: '#FA8231',
      },
      {
        label: 'CompletedOrders',
        data: monthly.map((item) => item.CompletedOrders),
        borderColor: '#3C40C6',
        backgroundColor: '#3C40C6',
      },
      {
        label: 'TotalOrders',
        data: monthly.map((item) => item.TotalOrders),
        borderColor: '#55B74E',
        backgroundColor: '#55B74E',
      },
    ],
  });


=======
>>>>>>> 7446fe0e7a5fdc631afb894d13a7b8f24454c18f

  function RenderChart() {
    return (
      <div className="container">
        <Line className="Element" options={options} data={data} />
      </div>
    );
  }



  function RenderBarChart() {
    return (
      <div className="container">
        <Bar className="Element" options={options} data={data} />
      </div>
    );
  }



  function RenderMonthChart() {
    return (
      <div className="container">
        <Line className="Element" options={options} data={month} />
      </div>
    );
  }

  function RenderMonthBarChart() {
    return (
      <div className="container">
        <Bar className="Element" options={options} data={month} />
      </div>
    );
  }



  function ComparePage() {
    setCompare(false)
    setVisible(false);
  }


  function StatisticsPage() {
    update(30);
    setCompare(true);
    setVisible(true);
  }
  function Daily() {
    update(30);
    flag = 1;
  }

  
 
  function RenderWeekChart() {
    return (
      <div className="container">
        <Line className="Element" options={options} data={month} />
      </div>
    );
  }

  const [isBar, SetBar] = useState(false);
  const [visible, setVisible] = useState(true);

  const c_class : string = "btn btn-outline-primary btn-lg";
  const c1_class : string = "btn btn-outline-primary btn-sm";  

  return (
    <div>
      <NavBar />
      <div id='btn-grp'>
<<<<<<< HEAD
        <button onClick={() => { StatisticsPage() }} type="button" id='btns' className="btn btn-outline-primary btn-lg" >Statistics</button>
        <button onClick={() => { ComparePage() }} type="button" id='btns' className="btn btn-outline-primary btn-lg">Compare</button>
        <div id='btns2'>
        {visible && <button onClick={() =>  RenderMonthChart() } type="button" id='btns' className="btn btn-outline-primary btn-sm" >Monthly</button>}
        {visible && <button onClick={() =>  RenderWeekChart() } type="button" id='btns' className="btn btn-outline-primary btn-sm">Weekly</button>}
        {visible && <button onClick={() => RenderChart()} type="button" id='btns' className="btn btn-outline-primary btn-sm" >Daily</button>}
        </div>
        <div />
        {isCompare ? (isBar ? <RenderBarChart /> : <RenderChart />) : <Compare orderList={data1} />}
        <div>
          {visible && <button onClick={() => SetBar(false)} type="button" id='btns1' className="btn btn-outline-primary btn-sm">Line-Chart</button>}
          {visible && <button onClick={() => SetBar(true)} type="button" id='btns1' className="btn btn-outline-primary btn-sm">Bar-Chart</button>}</div>
        <div id="btn-grp2">
          {visible && <button onClick={() => update(856)} type="button" id='btns1' className="btn btn-outline-primary btn-sm">856 Days</button>}
          {visible && <button onClick={() => update(365)} type="button" id='btns1' className="btn btn-outline-primary btn-sm">365 Days</button>}
          {visible && <button onClick={() => update(180)} type="button" id='btns1' className="btn btn-outline-primary btn-sm">180 Days</button>}
          {visible && <button onClick={() => update(90)} type="button" id='btns1' className="btn btn-outline-primary btn-sm">90 Days</button>}
          {visible && <button onClick={() => update(60)} type="button" id='btns1' className="btn btn-outline-primary btn-sm">60 Days</button>}
          {visible && <button onClick={() => update(30)} type="button" id='btns11' className="btn btn-outline-primary btn-sm">30 Days</button>}
          {visible && <button onClick={() => update(15)} type="button" id='btns1' className="btn btn-outline-primary btn-sm">15 Days</button>}
=======
        <button onClick={() => { StatisticsPage() }}  id='btns' style={{backgroundColor: isCompare ? '#55B74E' : '',color: isCompare ? 'white' : ''}} className={c_class} >Statistics</button>
        <button onClick={() => { ComparePage() }} id='btns' style={{backgroundColor: !isCompare ? '#55B74E' : '',color: !isCompare ? 'white' : ''}} className= {c_class}>Compare</button>
        <div />
        {isCompare ? (isBar ? <RenderBarChart /> : <RenderChart />) : <Compare orderList={data1} />}
        <div>
          {visible && <button onClick={() => SetBar(false)} id='btns1' style={{backgroundColor: !isBar ? '#55B74E' : '',color: !isBar ? 'white' : ''}} className={c1_class}>Line-Chart</button>}
          {visible && <button onClick={() => SetBar(true)} id='btns1' style={{backgroundColor: isBar ? '#55B74E' : '', color: isBar ? 'white' : ''}} className={c1_class}>Bar-Chart</button>}</div>
        <div id="btn-grp2">
          {visible && <button onClick={() => update(856)}  id="btns1" style={{backgroundColor: is865 ? '#55B74E' : '',color: is865 ? 'white' : ''}}  className={c1_class}>856 Days</button>}
          {visible && <button onClick={() => update(365)}  id="btns1" style={{backgroundColor: is365 ? '#55B74E' : '',color: is365 ? 'white' : ''}} className={c1_class}>365 Days</button>}
          {visible && <button onClick={() => update(180)}  id='btns1' style={{backgroundColor: is180 ? '#55B74E' : '',color: is180 ? 'white' : ''}} className={c1_class}>180 Days</button>}
          {visible && <button onClick={() => update(90)} id='btns1'  style={{backgroundColor: is90 ? '#55B74E' : '',color: is90 ? 'white' : ''}} className={c1_class}>90 Days</button>}
          {visible && <button onClick={() => update(60)} id='btns1' style={{backgroundColor: is60 ? '#55B74E' : '',color: is60 ? 'white' : ''}} className={c1_class}>60 Days</button>}
          {visible && <button onClick={() => update(30)} id='btns1' style={{backgroundColor: is30 ? '#55B74E' : '',color: is30 ? 'white' : ''}} className={c1_class}>30 Days</button>}
          {visible && <button onClick={() => update(15)} id='btns1' style={{backgroundColor: is15 ? '#55B74E' : '',color: is15 ? 'white' : ''}} className={c1_class}>15 Days</button>}
>>>>>>> 7446fe0e7a5fdc631afb894d13a7b8f24454c18f
        </div>
      </div>
    </div>
  );

}


export default Chart1;

