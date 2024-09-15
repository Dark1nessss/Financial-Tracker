const mongoose = require('mongoose');

const counterSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    sequence_value: {
        type: Number,
        default: 0
    }
});

const Counter = mongoose.model('Counters', counterSchema);

module.exports = Counter;