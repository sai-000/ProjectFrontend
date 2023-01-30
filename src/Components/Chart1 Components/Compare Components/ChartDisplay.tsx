import { Bar} from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
interface objtype{
  xaxis:string[],
  totalorders:number[],
  attemptedorders:number[],
  completedorders:number[]
}
export default function ChartDisplay({ xaxis, totalorders,attemptedorders,completedorders }: objtype) {
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
