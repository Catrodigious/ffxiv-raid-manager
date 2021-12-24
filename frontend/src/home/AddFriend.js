import React, { useState } from "react";

export function AddFriend({addFriend}){
  const [name, setName] = useState("");
  const [jobClass, setJobClass] = useState("");

  const handleAddFriend = (evt) => {
    evt.preventDefault();

    if (name && jobClass){
      addFriend(name, jobClass);
    }
  }

  const onSelectClass = (evt) => {
    console.log("bloop!")
    console.log(evt.target.innerHTML);
  }

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          
          <form onSubmit={handleAddFriend}>
            <div className="modal-body">
              <div className="input-group">
                <label className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" onChange={(evt)=>setName(evt.target.value)}></input>
              </div>
              <div className="input-group">
                <label className="form-label">
                  Class
                </label>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" type="button" id="class-select" >Class</button>
                    <ul className="dropdown-menu" aria-labelledby="class-select">
                    <li value="tank" onClick={onSelectClass}>Tank</li>
                    <li>Healer</li>
                    <li>Melee DPS</li>
                    <li>Magical DPS</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Add Friend</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}