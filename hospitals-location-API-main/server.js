require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//middleware
app.use(express.json());

//mongodb connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDb connection error:', err));

//routes
const hospitalRoutes = require('./routes/hospitalRoutes');
app.use('/api/hospitals', hospitalRoutes);

//start server

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
