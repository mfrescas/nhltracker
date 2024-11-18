const express = require("express");
const router = express.Router();
const { Contract } = require("../models");

router.get("/", async (req, res) => {
    const allContracts = await Contract.findAll({
        attributes: ['player_id', 'team_id', 'cap_hit']
    });      
    res.json(allContracts);
});

router.get("/byTeamId/:team_id", async (req, res) => {
    const id = req.params.team_id;
    try {
        console.log(`Fetching contract with team_id: ${id}`); 
        const contract = await Contract.findAll({
            where: { team_id: id },
            attributes: ['player_id', 'team_id', 'cap_hit']
        });
    
        if (contract) {
            console.log('Contract found:', contract); 
            res.status(200).json(contract); 
        } else {
            console.log('Contract not found');
            res.status(404).json({ message: "Contract not found" }); 
        }
    } 
    catch (error) {
        console.error('Error fetching contract:', error); 
        res.status(500).json({ message: "Internal server error" }); 
    }
});
module.exports = router;