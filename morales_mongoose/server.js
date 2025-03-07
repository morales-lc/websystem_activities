const express = require('express') //import Express
const app = express() //app instance of express
const PORT = 5000 //port
const mongoose = require('mongoose') //import Mongoose
//import registration route...
const registrationRoute = require('./routes/api/registration') 


app.use(express.urlencoded({extended: true}))
app.use(express.json()); //parse json data

//connect app to mongoDB, writes to console a prompt..
mongoose.connect('mongodb://127.0.0.1:27017/registrationDB') 
mongoose.connection.on('connected', () => console.log('MongoDB Connected'))

//server static files like images, HTML, javascripts..
app.use(express.static('public')) 

//tell express to use "registrationRoute" to all request to /api/registration
app.use('/api/registration', registrationRoute) 

//Starts server .. listens on port 5000.. write on console.log when server starts.
app.listen(PORT , () => {
    console.log(`App running on port ${PORT}`)
})
