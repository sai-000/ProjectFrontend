import NavBar1 from "../Chart1 Components/MainNavBar";
import { Line } from "react-chartjs-2";
import 'bootstrap/dist/css/bootstrap.css';

import {
    Chart,
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
  Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Chart4(){
    const Data={
        labels:['2022-01-01','2022-01-02','2022-01-03','2022-01-04','2022-01-05','2022-01-05','2022-01-06','2022-01-07','2022-01-08'],
        datasets:[
            {
                label:"Company1",
                data:[10,1000,200,3000,4000,544,767,9200],
                backgroundColor:'#FA8231',
                borderColor:'#FA8231'
            },
            {
              label:"Company2",
              data:[2500,800,50,2500,2500,800,2301,80],
              backgroundColor:'#3C40C6',
              borderColor:"#3C40C6"
          },

          {
            label:"Company3",
            data:[4000,350,279,8000,4000,350,279,8000],
            backgoundColor:'#55B74E',
            borderColor:'#55B74E'
        },
        {
          label:"Company4",
          data:[10,400,1000,5000,10,400,1000,5000],
          backgoundColor:'aqua',
          borderColor:'aqua'
      },
      {
        label:"Company5",
        data:[10,400,100,500,103,405,1050,7000],
        backgoundColor:'biscue',
        borderColor:'biscue'
    },
        
    
        ]
    } 
    const options = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Order Trends Comparison"
            
            
          },
          legend: {
            display: true
          }
          
        },
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
        
      };
    return(<><div><NavBar1/></div><div className="companyline"><Line data={Data} options={options}/></div></>)
}