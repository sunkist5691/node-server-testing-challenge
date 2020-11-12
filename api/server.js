const express = require("express");

const Players = require("../players/PlayersModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

// testing 
server.get("/players", (req, res) => { // endpoint with supertest
  Players.getAll() // db helper for test
    .then(players => {
      res.status(200).json(players);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// testing 
server.post("/players", (req, res) => { // endpoint with supertest
   Players.add(req.body) // db helper for test
     .then(player => {
       res.status(200).json(player);
     })
     .catch(error => {
       res.status(500).json(error);
     });
 });

module.exports = server;
