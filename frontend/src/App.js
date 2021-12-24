import './App.css';
import React from "react";
import { Parties } from "./home/Parties";
import { Friends } from "./home/Friends";
import { Scheduler } from "./Scheduler/Scheduler";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="row">
        <Routes>
          <Route path="scheduler" element={<Scheduler />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
