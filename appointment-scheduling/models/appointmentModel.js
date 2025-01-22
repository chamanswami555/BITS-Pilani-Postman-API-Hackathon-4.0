const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  user: { type: String, required: true },
  provider: { type: String, required: true },
  date: { type: Date, required: true },
  timeSlot: { type: String, required: true },
  status: { type: String, enum: ['Booked', 'Rescheduled', 'Cancelled'], default: 'Booked' },
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
