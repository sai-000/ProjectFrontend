import {  useState } from "react"
import './compare.css';

export default function BoxDisplay({xaxis,yaxis}:{xaxis:string[],yaxis:number[]}){
  return (<>
             {xaxis.map((val: string) => (
          <div className="boxdisplay"  key={val}>
            <h3>{val}</h3>
            <button
              type="button"
              className="button"
             onClick={()=>{
              console.log("del button clicked");}} 
            >
              &times;
            </button>
          </div>))}</>
       )
}



  
