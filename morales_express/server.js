const express = require('express') //import express
const app = express() //create instance of express
const PORT = 5000 //port the server will run on 
const ejs = require('ejs') //import EJS
//routes files for artists page and index page.
const kanaRoute = require('./routes/artists/kanaboon')
const akiraRoute = require('./routes/artists/akira')
const yoasobiRoute = require('./routes/artists/yoasobi')
const index = require('./routes/artists/index')


app.use(express.static('public')) // servers static filesin public folder

app.engine('html', ejs.renderFile) //EJS to render html files.
app.set('views', './views') //template files in views folder.
app.set('view engine', 'html') //render html files using express 

//routes for artists and homepage
app.use('/artists/kanaboon', kanaRoute)
app.use('/artists/akira', akiraRoute)
app.use('/artists/yoasobi', yoasobiRoute)
app.use('/', index)

//start express server and listen to 5000 port.
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})




