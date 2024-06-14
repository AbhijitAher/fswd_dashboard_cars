import React, { useEffect, useState } from "react";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import Navbar from "./app/components/Navbar";
import FilterSlider from "./app/components/FilterSlider";
import HistoryLog from "./app/components/HistoryLog";
import InventoryDetails from "./app/components/InventoryDetails";
import MSRPDetails from "./app/components/MSRPDetails";
import RecentData from "./app/components/RecentData";
import InventoryServices from "./ApiServices/InventoryServices";

function App() {
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    getInventory();
  }, []);

  const getInventory = async (payload) => {
    try {
      const res = await InventoryServices.getCarInventory();
      if (res.data.data && res.status == 200) {
        console.log("first")
        setInventoryData(res.data.data);
      } else {
        setInventoryData([]);
        console.log("Error in fetching data");
      }
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  return (
    <div className="App bg-gray-100">
      <div>
        <Navbar />
        <FilterSlider />
        <RecentData data={inventoryData}/>
        <InventoryDetails />
        <MSRPDetails />
        <HistoryLog />
        <button onClick={getInventory}>Get Data</button>
      </div>
    </div>
  );
}

export default App;
