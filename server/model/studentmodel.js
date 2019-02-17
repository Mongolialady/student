const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1/sample');

var Schema = mongoose.Schema;

var studentSchema = new Schema({
    rollNo: Number,
    firstName: String,
    lastName: String,
    rank: String
});

var StudentModel = mongoose.model('student', studentSchema);

module.exports = StudentModel;