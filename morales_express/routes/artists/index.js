const express  = require('express')
const router  = express.Router()

//https://expressjs.com/en/guide/routing.html
router.get('/' ,(req, res) => {
    
    res.render('index.html' , { title : 'Home'})
})

module.exports  = router