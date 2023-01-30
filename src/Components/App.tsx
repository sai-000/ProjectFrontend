import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart1 from "./Chart1 Components/Statistics Components/Chart1";
import Chart2 from "./Chart2  Components/chart2";
import Chart3 from "./Chart3 Components/chart3";
import axios from "axios";
import Chart4 from "./Chart4 Components/Chart4";
//This is the Entry Point for the Application
export default function App() {
  const [list, SetList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/OrderTrends/days/900")
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
          <Route path="/" element={<Chart1 orderList={list} />}></Route>
          <Route path="/Chart1" element={<Chart1 orderList={list} />}></Route>
          <Route
            path="/statistics"
            element={<Chart1 orderList={list} />}
          ></Route>
          <Route path="/Chart2" element={<Chart2 />}></Route>
          <Route path="/Chart3" element={<Chart3 />}></Route>
          <Route path="/Chart4" element={<Chart4 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
