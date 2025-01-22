const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Hospital name
    amenity: { type: String, default: "hospital" }, // Amenity type
    healthcare: { type: String, default: "hospital" }, // Healthcare classification
    address: {
        city: { type: String, required: true }, // City name
        street: { type: String, default: "" }, // Street name
        housenumber: { type: String, default: "" }, // House number
        postcode: { type: Number, default: null }, // Postal code
    },
    location: {
        latitude: { type: Number, required: true }, // Latitude (Y)
        longitude: { type: Number, required: true }, // Longitude (X)
    },
    externalId: { type: String, unique: true }, // External ID (e.g., "node/2694200840")
});

module.exports = mongoose.model('jaipur_hospitals', hospitalSchema);