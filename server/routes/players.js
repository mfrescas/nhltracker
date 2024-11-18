const express = require("express");
const router = express.Router();
const { Player } = require("../models");

router.get("/", async (req, res) => {
    const allPlayers = await Player.findAll({
        attributes: ['player_id', 'position', 'number', 'height', 'weight']
    });      
    res.json(allPlayers);
});

router.get("/byId/:player_id", async (req, res) => {
    const id = req.params.player_id;
    try {
        console.log(`Fetching player with player_id: ${id}`); 
        const player = await Player.findAll({
            where: { player_id: id },
            attributes: ['player_id', 'position', 'number', 'height', 'weight']
        });
    
        if (player) {
            console.log('Player found:', player); 
            res.status(200).json(player); 
        } else {
            console.log('Player not found');
            res.status(404).json({ message: "Player not found" }); 
        }
    } 
    catch (error) {
        console.error('Error fetching player:', error); 
        res.status(500).json({ message: "Internal server error" }); 
    }
});
module.exports = router;