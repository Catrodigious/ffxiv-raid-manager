import React, { useState } from "react";
import { ModeSelect } from "./ModeSelect";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./Navigation.css";

export function CalendarBox(){
  const [value, onChange] = useState(new Date());
  
  return (
    <div className="col-box">
      <div className="card">
        <div className="card-header">
          <h1>Raid Scheduler</h1>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="calendar-box">
                <Calendar />
              </div>
            </div>
          
            <div className="col-6">
              <ModeSelect />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}