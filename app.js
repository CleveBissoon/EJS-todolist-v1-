//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){

var date = new Date();
var dayIndex = date.getDay();
const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = dayList[dayIndex];

res.render("list", {kindOfDay: day});

});




app.listen(3000, function() {
  console.log("Server started on port 3000");

});
