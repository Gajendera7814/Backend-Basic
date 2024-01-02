//<<<<<<<<<<<<<<<<<---------------------------- How to deploy backend code in production -------------------------->>>>>>>>>>>>>>>>//

require("dotenv").config();
const express = require("express");
const color = require("colors");

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", async (req, res) => {
  res.send("hello welcome");
});

app.get("/login", async (req, res) => {
  res.send("<h1> login page </h1>");
});

app.get("/twitter", async (req, res) => {
  res.send("twitter.com");
});

const userInformation = [
  {
    id: 1,
    name: "Akash Verma",
    username: "akash",
    email: "akash@april.biz",
  },
  {
    id: 2,
    name: "Harsh Raj",
    username: "harsh",
    email: "harsh@melissa.tv",
  },
  {
    id: 3,
    name: "Shubham chuchan",
    username: "shubham",
    email: "chuchan@yesenia.net",
  },
  {
    id: 4,
    name: "Vicky Gupta",
    username: "vicky",
    email: "guptavicky@kory.org",
  },
  {
    id: 5,
    name: "Gajendera Kumar",
    username: "Gajendera",
    email: "Lucio_Hettinger@annie.ca",
  }
];

app.get('/userInfo', async (req, res) => {
    res.json(userInformation);
})

app.listen(PORT, () => {
  console.log(`server running on port http://localhost:${PORT}`.yellow);
});
