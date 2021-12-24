import React from "react";
import { Navigation } from "./Navigation";
import { CalendarBox } from "./CalendarBox";
import "./Navigation.css";

export function Scheduler(){
  return (
    <div className="container-fluid">
      <h1>Schedule Page</h1>
      <div className="row">
        
        <div className="col-6">  
          <CalendarBox />
        </div>

        <div className="col-6">
          <Navigation />
        </div>

      </div>
    </div>
  )
}
