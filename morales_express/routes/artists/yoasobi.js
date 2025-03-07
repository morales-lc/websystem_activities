const express  = require('express') //import express.
const router  = express.Router() //express routers.

//https://expressjs.com/en/guide/routing.html
router.get('/' ,(req, res) => {
    
    res.render('artists/yoasobi.html' , { title : 'Yoasobi'})
})

module.exports  = router //export router to be used in server.js