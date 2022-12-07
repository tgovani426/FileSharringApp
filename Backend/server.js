const express = require('express')
const app = express()
const port = process.env.PORT ||  5000 
const connectDB = require('./config/db')
const path =  require('path')
const cors  = require('cors')

//cors
const corsOption = {
    origin: process.env.ALLOW_CLIENTS.split(',')
}
app.use(cors(corsOption))

//middlewere
app.use(express.static('public'))
app.use(express.json())


// Template Engine
app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs') 

//Routes
app.use('/api/files',require('./routes/file'))
app.use('/files',require('./routes/show'))
app.use('/files/download',require('./routes/download'))


app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})
connectDB()