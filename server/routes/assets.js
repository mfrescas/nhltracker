const express = require("express");
const router = express.Router();
const { Asset } = require("../models");

router.get("/", async (req, res) => {
    const allAssets = await Asset.findAll({
        attributes: ['round', 'year', 'original_round_id', 'current_round_id']
    });      
    res.json(allAssets);
});

router.get("/byRound/:round", async (req, res) => {
    const round = req.params.round;
    try {
        console.log(`Fetching asset with round: ${round}`); 
        const request = await Asset.findAll({
            where: { round: round },
            attributes: ['round', 'year', 'original_team_id', 'current_team_id']
        });
    
        if (request) {
            console.log('Round found:', request); 
            res.status(200).json(request); 
        } else {
            console.log('Round not found');
            res.status(404).json({ message: "Round not found" }); 
        }
    } 
    catch (error) {
        console.error('Error fetching round:', error); 
        res.status(500).json({ message: "Internal server error" }); 
    }
});
module.exports = router;