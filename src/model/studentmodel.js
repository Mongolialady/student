const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1/training');

var Schema = mongoose.Schema;

var studentSchema = new Schema({
    RollNo: Number,
    FirstName: String,
    LastName: String,
    Rank: String
});

var StudentSchema = mongoose.model('student', studentSchema);

module.exports = StudentSchema;