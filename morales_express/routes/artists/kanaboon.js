const express  = require('express')
const router  = express.Router() //express routers

//https://expressjs.com/en/guide/routing.html
router.get('/' ,(req, res) => {
    
    res.render('artists/kana-boon.html' , { title : 'Kana-Boon'}) //render akira.html
})

module.exports  = router //export router to be used in server.js