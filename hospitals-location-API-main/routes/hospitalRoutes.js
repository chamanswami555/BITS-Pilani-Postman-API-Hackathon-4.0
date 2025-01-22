const express = require('express');
const router = express.Router();

const jaipur_hospitals = require('../models/Hospital');

//get nearby hospitals
router.get('/nearby', async (req, res) => {
    const { latitude, longitude, radius = 5} = req.query;

    if (!latitude || !longitude) {
        return res.status(400).json({ error: 'Latitude and Longitude are required'});
    }
    
    try {
        const radiusInKm = radius / 6371;
        const nearbyHospitals = await jaipur_hospitals.find({
            location: {
                $geoWithin: {
                    $centerSphere: [[longitude, latitude], radiusInKm],
                },
            
            },
        });
        res.json(nearbyHospitals);
    } catch(err) {
        rss.status(500).json({ error: 'Server error'});
    }
});

module.exports = router;