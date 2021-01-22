
const express = require('express');
const router = express.Router();

//On importe les données de nos pages
const articles = require('../data/article.json');

//on importe les fonctions contenues dans notre fichier routerFunctions
const functions = require('./routerFunctions');

//Route vers la page d'acceuil. Fait appel à la fonction homepage contenue dans functions
router.get('/', functions.homePage);

//Route dynamisée vers les pages des articles. Fait appel à la fonction articlePage contenue dans functions
router.get('/article/:id', functions.articlePage);

//Route dynamisée vers une page listant les articles d'une catégorie. Fait appel à la fonction categoryPage contenue dans functions
router.get('/category/:name', functions.categoryPage);

module.exports = router;