const express = require("express");
const app = express();

const blogroutes = express.Router();

blogroutes.route("/").get((req,res) => {
    res.send("Welcome to my blog")
});

blogroutes.route("/").post((req,res) => {
    res.send("Welcome to my blog post")
});

blogroutes.route("/:id").get((req,res) => {
    res.send(`Get to my blog for ${req.params.id}`)
});

blogroutes.route("/:id").put((req,res) => {
    res.send(`Updating my blog for ${req.params.id}`)
});

blogroutes.route("/:id").delete((req,res) => {
    res.send(`Delete my blog for ${req.params.id}`)
});


module.exports = blogroutes;