const mongoose = require("mongoose");

//mongoose.connect(process.env["ciscoDemoMongo"]);
mongoose.connect('mongodb://hhy615:hhy615@cluster0-shard-00-00-1dtr9.mongodb.net:27017,cluster0-shard-00-01-1dtr9.mongodb.net:27017,cluster0-shard-00-02-1dtr9.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true')
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    rollNo: Number,
    firstName: String,
    lastName: String,
    rank: String
});

var StudentModel = mongoose.model('student', studentSchema);

module.exports = StudentModel;