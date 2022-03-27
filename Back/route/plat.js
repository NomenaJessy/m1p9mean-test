const express = require('express');
var plat = require('../model/plat');
const router = new express.Router();

router.get('/Plat',async (req,res)=>{
    try{
        const Plats = await plat.find({});
        res.status(200).send({status : 200,data : Plats});
    }catch(error){
        res.status(500).send(error);
    }
});

module.exports = router;