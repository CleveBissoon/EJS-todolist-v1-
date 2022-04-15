//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];

app.set("view engine", "ejs");

app.use(express.urlencoded({extender:true}));

app.get("/", function(req, res) {

  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);

  // use render to move item from ejs to html to be shown on web page

  res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", function(req, res){
    let item = req.body.newItem;
      items.push(item);

    res.redirect("/");
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
