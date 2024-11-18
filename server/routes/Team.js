const express = require("express");
const router = express.Router();
const { Team } = require("../models");
const { all } = require("./test");

router.get("/", async (req, res) => {
    const allTeams = await Team.findAll();
    res.json(allTeams);
})