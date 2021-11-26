const express = require('express');
const router = express.Router();



router.get('/', (req,res) =>{
    res.render('index', {
        title: 'myIndexPage'
    });
});

router.get('/test', (req,res) =>{
    res.render('test', {
        title: 'HELLO'
    })
})

module.exports = router;