const {
    request,
    response
} = require('express');
const express = require('express');

const router = express.Router();

const articles = require('../data/article.json');

router.get('/', (request, response) => {
    response.render('index', {
        articles
    });
});

router.get('/article/:id', (request, response) => {
    const idArticle = request.params.id;

    let articleExist;

    for (const article of articles) {
        if (idArticle == article.id) {
            articleExist = article;
            
        }
    }    

    //SI l'article existe on affiche la vue de l'article
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