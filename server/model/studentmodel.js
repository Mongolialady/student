const mongoose = require("mongoose");

mongoose.connect(process.env["ciscoDemoMongo"]);
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    rollNo: Number,
    firstName: String,
    lastName: String,
    rank: String
});

var StudentModel = mongoose.model('student', studentSchema);

module.exports = StudentModel;