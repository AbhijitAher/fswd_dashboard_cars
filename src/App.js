import React from "react";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import Navbar from "./app/components/Navbar";
import FilterSlider from "./app/components/FilterSlider";
import HistoryLog from "./app/components/HistoryLog";
import InventoryDetails from "./app/components/InventoryDetails";
import MSRPDetails from "./app/components/MSRPDetails";
import RecentData from "./app/components/RecentData";

function App() {
  return (
    <div className="App">
      <FilterSlider />
      <div>
        <Navbar />
        <RecentData />
        <InventoryDetails />
        <MSRPDetails />
        <HistoryLog />
      </div>
    </div>
  );
}

export default App;
