const express = require("express");
const router = express.Router();
const { Location } = require("../models");

router.get("/", async (req, res) => {
    const allLocations = await Location.findAll({
        attributes: ['location_id', 'city', 'state', 'nation']
    });      
    res.json(allLocations);
});

router.get("/byId/:location_id", async (req, res) => {
    const id = req.params.location_id;
    try {
        console.log(`Fetching asset with location_id: ${id}`); 
        const request = await Location.findAll({
            where: { location_id: id },
            attributes: ['location_id', 'city', 'state', 'nation']
        });
    
        if (request) {
            console.log('Location found:', request); 
            res.status(200).json(request); 
        } else {
            console.log('Location not found');
            res.status(404).json({ message: "Location not found" }); 
        }
    } 
    catch (error) {
        console.error('Error fetching location_id:', error); 
        res.status(500).json({ message: "Internal server error" }); 
    }
});
module.exports = router;