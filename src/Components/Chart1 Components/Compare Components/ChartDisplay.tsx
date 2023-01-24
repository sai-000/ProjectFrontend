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
//import { data1 } from "../data";
import { useEffect } from "react";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ChartDisplay({ xaxis, yaxis }: {xaxis:string[],yaxis:number[]}) {



useEffect(() => {
   // console.log(`rerendering`);
    
    renderchart(xaxis, yaxis);
  }, [xaxis, yaxis]);

  const renderchart = (xaxis: string[], yaxis: number[]) => {
    //console.log(`called chart`)
    return (
    <Bar data={Data}/>);
  };

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
            label:"Volume",
            data:yaxis,
            backgroundColor:' #55B74E'
        }
    ]
} 

return (<div>
    <div>
      <Bar data={Data} options={{
        responsive:true,
        maintainAspectRatio:true,
         plugins: {
          title: {
            display: true,
            text: "Order Trends Comparison"
            
          },
          legend: {
            display: false
          }
          
        }
        
      }}/>
    </div>
    
    </div>
  );
}
