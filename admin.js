const path = require('path'); 

const express = require('express');

const rootDir = require('../Util/path');

const router = express.Router();

router.get('/add-product',(req,res,next)=> {
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post('/add-product', (req,res,next)=> {
    console.log(JSON.stringify(req.body));
    res.redirect('/');
})

module.exports = router;