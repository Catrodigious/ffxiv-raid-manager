import React from "react";

export function Card({header, Element}){
  return (
    <div className="card">
        <div className="card-header">
          <h1>{header}</h1>
        </div>
        <div className="card-body">
          <div className="calendar-box">
            {Element}
          </div>
        </div>
      </div>
  )
}