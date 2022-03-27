var mongoose = require('mongoose');

var utilisateurSchema = new mongoose.Schema({
    Nom:String,
    Prenom:String,
    DateNaissance:String,
    // TypeCompte: String,
    Mail:String,
    MotDePasse:String
});


var Utilisateur = mongoose.model('Utilisateur',utilisateurSchema);

module.exports = Utilisateur;