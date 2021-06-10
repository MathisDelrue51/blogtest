// on importe nos données (les articles)
const articles = require('../data/article.json');

const functions = {
    homePage: (request, response) => {
        response.render('index', {
            articles
        });
    },

    articlePage: (request, response) => {
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
    },

    categoryPage: (request, response) => {
        // filteredArticles utilise la fonction filter (fonction disponible en js) sur notre liste d''articles contenus dans la fichier json
        //pour chaque article (art) il compare la catégorie (mise en minuscule) et le paramètre name de notre url (/category/:name) (mis en minuscule)
        //Si art.category.toLowerCase() === request.params.name.toLowerCase()
        //Alors on ajoute l'article correspondant à filteredArticles
        const filteredArticles = articles.filter((art) => {
            return art.category.toLowerCase() === request.params.name.toLowerCase();
        });
        
        //Lorsque tous les articles disponibles ont été testé,
        //SI filteredArticles contient quelque chose 
        if (filteredArticles.length !== 0) {
            
             //renvoie la page index avec en paramètre les articles contenus dans filteredArticles
            response.render('index', {
                articles: filteredArticles
            });
        
        } else {            
            //SINON on change le statut à 404 et on affiche un message
            response.status(404).render('404');
        }

    }
};


module.exports = functions;