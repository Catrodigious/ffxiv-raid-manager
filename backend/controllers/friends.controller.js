const fs = require("fs");
const dataFile = require("../staticData/people.json");

function list(req, res){
  if (dataFile)
    res.status(200).json({data: dataFile});
}

module.exports = {
  list
}