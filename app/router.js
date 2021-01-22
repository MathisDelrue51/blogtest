
const express = require('express');
const router = express.Router();

//On importe les données de nos pages
const articles = require('../data/article.json');

//Route vers la page d'acceuil
router.get('/', (request, response) => {
    response.render('index', {
        articles
    });
});

//Route dynamiser vers les pages des articles
router.get('/article/:id', (request, response) => {
    //On récupère l'ID de la page
    const idArticle = request.params.id;

    let articleExist;

    //Pour chaque élément contenu dans notre liste d'article on vérifie si l'ID entré correspond à un article existant
    for (const article of articles) {
        if (idArticle == article.id) {
            //Si c'est le cas notre élément articleExist prend la valeur de l'article (toutes ses données)
            articleExist = article;            
        }
    }    

    //SI l'article existe on affiche la vue de l'article en renvoyant les données dont on a besoin en paramètre de response.render
    if (articleExist !== undefined) {
        response.render('article', {
            articles,
            articleExist
        });
    } else {
        //SINON on change le statut à 404 et on affiche un message
        response.status(404).render('404');
    }
    
});

module.exports = router;