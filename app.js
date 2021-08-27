//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Hello, I'm Erjill and Welcome to my Blog!";
const aboutContent = "I'm a Computer Science student, studying at Royal Holloway University of London! I'm creating this blog application to hone my web development skills!";
const contactContent ="Email: Erjilldevera2001@gmail.com";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home", {homeStartingContent: homeStartingContent, aboutContent: aboutContent, contactContent: contactContent});
});

app.get("/about", function(req, res) {
  res.render("about", {aboutContent: aboutContent});
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
