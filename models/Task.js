// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['td', 'ip', 'de'], // Values: TODO, IN PROGRESS, DONE
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;