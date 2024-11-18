const express = require("express");
const router = express.Router();
const { Team } = require("../models");

router.get("/", async (req, res) => {
    const allTeams = await Team.findAll({
        attributes: ['team_id', 'location', 'team_name', 'division', 'cap_space', 'cap_hit', 'roster_size']
    });      
    res.json(allTeams);
});

router.get("/byId/:team_id", async (req, res) => {
    const id = req.params.team_id;
    try {
        console.log(`Fetching team with team_id: ${id}`); 
        const team = await Team.findAll({
            where: { team_id: id },
            attributes: ['team_id', 'location', 'team_name', 'division', 'cap_space', 'cap_hit', 'roster_size']
        });
    
        if (team) {
            console.log('Team found:', team); 
            res.status(200).json(team); 
        } else {
            console.log('Team not found');
            res.status(404).json({ message: "Team not found" }); 
        }
    } 
    catch (error) {
        console.error('Error fetching team:', error); 
        res.status(500).json({ message: "Internal server error" }); 
    }
});
module.exports = router;