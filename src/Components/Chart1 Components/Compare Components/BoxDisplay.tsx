import { render } from "@testing-library/react"
import { useEffect, useState } from "react"
import ChartDisplay from "./ChartDisplay"
import Compare from "./compare";
import './compare.css';

export default function BoxDisplay({xaxis,yaxis}:{xaxis:string[],yaxis:number[]}){
  const [displaydata,setdispdata]=useState<string[]>(xaxis)
  //setdispdata(xaxis)
    function handleDelete(toBeRemoved: string) {
        // TODO Issue: Delete functionality 
        
      }
     // console.log('data from box '+xaxis)
      return (<>
             {xaxis.map((val: string) => (
          <div className="boxdisplay"  key={val}>
            <h3>{val}</h3>

            <button
              type="button"
              className="button"
             onClick={()=>{
              console.log("del button clicked");
              // console.log(val)
              // console.log(displaydata)
             }} 
            >
              &times;
            </button>
            
          </div>
         
        ))}
      
      </>
       )
}



  
