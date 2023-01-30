import {  useState } from "react";
import "./compare.css";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDisplay from "./ChartDisplay";
import { AppState } from "../interface";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

//The Compare component takes data from backend api,stores in the local storage and displays analytics on selected Dates.

const Compare = (props: { orderList: AppState[] }) => {
  //orderList is the list of objects that are fetched from the api
  const data1: AppState[] = props.orderList;
  let defaultx: any = data1.at(data1.length - 1)?.OrderDate.slice(0, 10).toString();
  let defaultTotal: any = data1.at(data1.length - 1)?.TotalOrders;
  let defaultAttempted: any = data1.at(data1.length - 1)?.AttemptedOrders;
  let defaultCompleted: any = data1.at(data1.length - 1)?.CompletedOrders;
  const [xaxisdata, setXData] = useState<string[]>([defaultx]);
  const [TotalOrder, setTotalorder] = useState<number[]>([defaultTotal]);
  const [AttemptedOrders, setAttemptedorders] = useState<number[]>([defaultAttempted]);
  const [CompletedOrders, setCompletedOrders] = useState<number[]>([defaultCompleted]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    data1.map((obj) => {
      if (obj.OrderDate.slice(0, 10) === event.target.value) {
        if (!xaxisdata.find((xval) => xval === obj.OrderDate.slice(0, 10))) {
          setXData([...xaxisdata, obj.OrderDate.slice(0, 10)]);
          setTotalorder([...TotalOrder, obj.TotalOrders]);
          setAttemptedorders([...AttemptedOrders, obj.AttemptedOrders]);
          setCompletedOrders([...CompletedOrders, obj.CompletedOrders]);
        } else {
          alert("Date already selected , check graph for the data");
        }
      }
    });
  };

  return (
    <>
      <div>
        <br></br>
      </div>
      <div className="flex-container">
        {" "}
        {/* Selection of date from datepicker */}
        <div className="flex-child1">
          <div className="datepicker">
            <input
              type="date"
              min={data1.at(0)?.OrderDate.slice(0, 10).toString()}
              max={data1.at(data1.length - 1)?.OrderDate.slice(0, 10).toString()}
              defaultValue={data1.at(data1.length - 1)?.OrderDate.slice(0, 10).toString()}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <br></br>
          <br></br>
          <br></br>
          {/* This is For the Box Display for the selected dates */}
          <div className="box-container">
            {xaxisdata.map((val: string) => (
              <div className="boxdisplay" key={val}>
                <b>{val}</b>
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    setXData(xaxisdata.filter((obj) => obj !== val));
                    data1.map((object) => {
                      if (object.OrderDate.slice(0, 10) === val) {
                        setTotalorder(
                          TotalOrder.filter(
                            (totalorder) => totalorder !== object.TotalOrders
                          )
                        );
                        setAttemptedorders(
                          AttemptedOrders.filter(
                            (attemptedorder) =>
                              attemptedorder !== object.AttemptedOrders
                          )
                        );
                        setAttemptedorders(
                          CompletedOrders.filter(
                            (completededorder) =>
                              completededorder !== object.CompletedOrders
                          )
                        );
                      }
                    });
                    console.log(val);
                  }}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <br></br>
          <br></br>
        </div>
        <div className="flex-child2">
          <ChartDisplay
            xaxis={xaxisdata}
            totalorders={TotalOrder}
            attemptedorders={AttemptedOrders}
            completedorders={CompletedOrders}
          />{" "}
        </div>
      </div>
    </>
  );
};

export default Compare;
