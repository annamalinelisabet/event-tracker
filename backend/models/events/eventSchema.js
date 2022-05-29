const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({

    userId:                { type: String, required: true },
    title:                 { type: String, required: true },
    description:           { type: String, required: true },
    date:                  { type: Date, required: true }  

}, { timestamps: true })

module.exports = mongoose.model('Event', eventSchema);