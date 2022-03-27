const express = require('express');
const app = express();
require('./Mongo');
const utilisateurRouter = require('./route/utilisateur');

app.use(express.json());

app.use(utilisateurRouter);
// const bodyParser = require('body-parser');
// const Mongo = require('./Mongo');
// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://127.0.0.1:27017';
// const dbName = 'ekaly-nomena';
// let db;
// const sha1 = require('sha1');
// shasum.update('foo')


// MongoClient.connect(url, { useNewUrlParser: true }).then(client=>{
    
//     db = client.db(dbName);
//     console.log(`Connected MongoDB: ${url}`);
//     console.log(`Database: ${dbName}`);
    
    // app.use(bodyParser.urlencoded({extended:true}));

    // colonnes : mail motdepasse
    // app.post('/Connexion',function(req,res){
    //     req.body.MotDePasse = sha1(req.body.MotDePasse);
    //     db.collection('utilisateur').find(req.body).toArray()
    //     .then(result=>{
    //         res.send(result);
    //     });
    // });

    // app.post('/Connexion',utilisateurController.Connexion);

    // colonnes : Nom prenom dateNaissance mail motdepasse
    // app.post('/Inscription',(req,res)=>{
    //     const collect = db.collection('utilisateur');
    //     req.body.MotDePasse = sha1(req.body.MotDePasse);
    //     collect.insertOne(req.body).then(result=>{
    //         console.log(result);
    //     }).catch(error=>{});
    //     res.send(req.body);
    // });


app.listen(1042,function(){
    console.log("Server is running on port 1042");
});
// }).catch(error =>{
//     console.log(error);
// });

