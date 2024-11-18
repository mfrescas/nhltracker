const express = require("express");
const router = express.Router();
const { Transaction } = require("../models");

router.get("/", async (req, res) => {
    const allTransactions = await Transaction.findAll({
        attributes: ['player_id', 'origin_team_id', 'destination_team_id', 'transaction_date', 'transaction_type']
    });      
    res.json(allTransactions);
});

router.get("/byId/:player_id", async (req, res) => {
    const id = req.params.player_id;
    try {
        console.log(`Fetching transaction with player_id: ${id}`); 
        const transaction = await Transaction.findAll({
            where: { player_id: id },
            attributes: ['player_id', 'origin_team_id', 'destination_team_id', 'transaction_date', 'transaction_type']
        });
    
        if (transaction) {
            console.log('Transaction found:', transaction); 
            res.status(200).json(transaction); 
        } else {
            console.log('Transaction not found');
            res.status(404).json({ message: "Transaction not found" }); 
        }
    } 
    catch (error) {
        console.error('Error fetching transaction:', error); 
        res.status(500).json({ message: "Internal server error" }); 
    }
});
module.exports = router;