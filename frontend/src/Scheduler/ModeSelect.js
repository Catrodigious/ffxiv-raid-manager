import React, { useState } from "react";

export function ModeSelect(){
  const [mode, setMode] = useState("unavailability");
  const [checked, setChecked] = useState(false);


  return (
    <div className="card">
      <div className="card-header">
        <h5>Mode</h5>
      </div>
      <div className="btn-group-vertical" role="group" aria-label="Basic checkbox toggle button group">
        <input type="radio" name="mode-selection" className="btn-check" id="availability" autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor="availability">Available</label>
        <input type="radio" name="mode-selection" className="btn-check" id="unavailability" autoComplete="off"/>
        <label className="btn btn-outline-danger" htmlFor="unavailability">Unavailable</label>
      </div>
    </div>
  )
}