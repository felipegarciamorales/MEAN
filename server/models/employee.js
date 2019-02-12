const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    name: { type: String, requiered: true },
    position: { type: String, requiered: true },
    office: { type: String, requiered: true },
    salary: { type: Number, requiered: true }
});

module.exports = mongoose.model('Employee', EmployeeSchema);