const mongoose = require('mongoose')
require('dotenv').config()


function connectDB() {
    mongoose.connect(process.env.MONGO_URL, {})

    const connection = mongoose.connection

    connection.once('open', () => {
        console.log('Database Connected...');
    }).on('error', function (err) {
        console.log(err);
      })
}
module.exports = connectDB