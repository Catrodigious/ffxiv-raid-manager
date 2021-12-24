import React, { useState, useEffect } from "react";
import "./home.css";
import { AddFriend } from "./AddFriend";
import { listFriends } from "../utils/api";

class Friend {
  constructor(name=null, jobClass=null, affiliation=null){
    this.name = name;
    this.jobClass = jobClass;
    this.affiliation = affiliation;
  }
}


export function Friends(){
  const [friends, setFriends] = useState([]);

  const addFriend = (name=null, jobClass=null) => {
    console.log("name: ", name, "jobclass: ", jobClass);
    if (!name || !jobClass) console.error("There was no name or job class listed");

    const newFriend = {
      name, 
      jobClass,
      affiliation: "None"
    };
    const newFriendsList = [...friends, newFriend];
    setFriends(newFriendsList);
  }

  const loadFriends = () => {
    const abortController = new AbortController();

    listFriends({}, abortController.signal)
      .then((data)=>{
        const friendsArr = [...friends];
        for (let role in data){
          data[role].map((person)=>{
            const jobClass = person.class;
            const name = person.name;

            friendsArr.push(new Friend(name, jobClass, null));
            setFriends([...friends, ...friendsArr]);
          })
        }
      })
  }

  useEffect(loadFriends, []);

  const AffiliationList = () => {
    return (
      <div className="dropdown">
        <button type="button" className="btn btn-secondary dropdown-toggle" id="affiliation-dropdown"></button>
        <ul className="dropdown-menu" aria-labelledby="affiliation-dropdown">
          <li></li>
        </ul>
      </div>
    )
  }

  const FriendsList = () => {
    return friends.map((friend, i)=>{
        return (
          <tr key={i}>
            <td>{friend.name}</td>
            <td>{friend.jobClass}</td>
            <td>{friend.affiliation}<AffiliationList /></td>
          </tr>
        )
    })
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Job Class</th>
                  <th>Party Affiliation</th>
                </tr>
              </thead>
              <tbody>
                <FriendsList />
              </tbody>
            </table>
        </div>
        <div className="row">
          <button type="button" className="btn btn-primary add-friends-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Friends</button>
        </div>
        <AddFriend addFriend={addFriend} />
      </div>
    </div>
  )
}

