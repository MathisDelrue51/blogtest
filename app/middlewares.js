//lorsque la fonction est appelée, on renvoie le statue 404 et on affiche la page 404.ejs
function error(request, response, next) {
    response.status(404).render('404');
};

function lectureArticleJson(request, response, next) {
    //lire le fichier article.json
    const articles = require('../data/article.json');
    //pour rendre les infos disponibles dans toutes les vues, on va ajouter le contenu de article.json à l'object response.locals
    //Ainsi, les infos stockées dans cet object seront dispos dans tous les middlewares que vont traverser request et response avant de renvoyer une réponse au navigateur
    response.locals.articles = articles;
    next();
}


module.exports = {
    error,
   lectureArticleJson
};