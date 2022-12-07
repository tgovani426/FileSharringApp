const mongoose = require('mongoose')
const Schema = mongoose.Schema
const MONGO_URL = "mongodb+srv://TirthGovani:Godgovani_4@file-sharing.nphex.mongodb.net/?retryWrites=true&w=majority"
const {exit}  = require('process')
// Connect Database
function connectDB() {
    mongoose.connect(MONGO_URL, {})

    const connection = mongoose.connection

    connection.once('open', () => {
        console.log('Database Connected...');
    }).on('error', function (err) {
        console.log(err);
      })
}
connectDB()

// File Schema


const fileSchema = new Schema({
    filename: { type: String, required: true },
    path: { type: String, required: true },
    size: { type: Number, required: true },
    uuid: { type: String, required: true },
    sender: { type: String, required: false },
    receiver: { type: String, required: false },
}, { timestamps: true });

const File = mongoose.model('File', fileSchema)

// to delete File From DB
File.deleteMany({ createdAt: { $lt: new Date(Date.now() - 24 * 60 * 60 * 1000) } }).then(function () {
    console.log("Data deleted"); // Success
    exit()
}).catch(function (error) {
    console.log(error);
})
