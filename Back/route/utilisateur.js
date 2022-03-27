const express = require('express');
var utilisateur = require('../model/utilisateur');
const router = new express.Router();
const sha1 = require('sha1');

router.post('/Connexion', async (req,res)=>{
    try{
        req.body.MotDePasse = sha1(req.body.MotDePasse);
        const utilisateurs = await utilisateur.find({Mail: req.body.Mail,MotDePasse : req.body.MotDePasse});
        const token = req.body.MotDePasse;
        res.status(200).send({status : 200,data: utilisateurs,token: token});
    }catch(error){
        res.status(500).send(error);
    } 
});

router.get('/findUser', async (req,res)=>{
    try{
        const utilisateurs = await utilisateur.find({});
        res.status(200).send(utilisateurs);
    }catch(error){
        res.status(500).send(error);
    } 
});

router.post('/Inscription',async (req,res)=>{
    try{
        req.body.MotDePasse = sha1(req.body.MotDePasse);
        await utilisateur.find({Nom : req.body.Nom}).then(async resultat =>{
            if(resultat.length === 0){
                const user = new utilisateur(req.body);
                await user.save(async function(){
                    const utilisateurs = await utilisateur.find({Mail : req.body.Mail , MotDePasse : req.body.MotDePasse}); 
                    const token = req.body.MotDePasse;
                    res.status(200).send({status : 200, data : utilisateurs, token : token});
                });
            }else{
                res.status(400).send("Cet utilisateur existe deja");
            }
        });
    }catch(error){
        console.log(error);
    }
});

module.exports = router;