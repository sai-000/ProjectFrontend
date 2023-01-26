import { Bar, Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";
import { useEffect } from "react";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
interface objtype{
  xaxis:string[],
  totalorders:number[],
  attemptedorders:number[],
  completedorders:number[]
}
export default function ChartDisplay({ xaxis, totalorders,attemptedorders,completedorders }: objtype) {




const option={
  Plugin:{
    title:{
      display:true,
      text:"Order Trend Analytics"
    }

  }
}
const Data={
    labels:xaxis,
    datasets:[
        {
            label:"Total Orders",
            data:totalorders,
            backgroundColor:'#55B74E'
        },
        {
          label:"Completed Orders",
          data:completedorders,
          backgroundColor:'#3C40C6'
      },
      {
        label:"Attempted Orders",
        data:attemptedorders,
        backgroundColor:'#FA8231'
    },
    

    ]
} 
var options={
  responsive:true,
  maintainAspectRatio:true,
  skipNull:true,
   plugins: {
    title: {
      display: true,
      text: "Order Trends Comparison"
      
      
    },
    legend: {
      display: true
    }
    
  }
  
}
return (<div>
    <div>
      <Bar data={Data} options={options}/>
    </div>
    
    </div>
  );
}
