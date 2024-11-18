const express = require("express");
const router = express.Router();
const { Coach } = require("../models");

router.get("/", async (req, res) => {
    const allCoaches = await Coach.findAll({
        attributes: ['coach_id', 'team_id', 'role']
    });      
    res.json(allCoaches);
});

router.get("/byId/:coach_id", async (req, res) => {
    const id = req.params.coach_id;
    try {
        console.log(`Fetching coach with coach_id: ${id}`); 
        const coach = await Coach.findAll({
            where: { coach_id: id },
            attributes: ['coach_id', 'team_id', 'role']
        });
    
        if (coach) {
            console.log('Coach found:', coach); 
            res.status(200).json(coach); 
        } else {
            console.log('Coach not found');
            res.status(404).json({ message: "Coach not found" }); 
        }
    } 
    catch (error) {
        console.error('Error fetching coach:', error); 
        res.status(500).json({ message: "Internal server error" }); 
    }
});
module.exports = router;