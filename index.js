const express = require('express');

const app = express();

const PORT = 4500;

const router = require('./app/router');

const middlewares = require('./app/middlewares');


//on indique à express le moteur de temlplates à utiliser
app.set('view engine', 'ejs');
//on ajoute le répertoire des vues
app.set('views', './views');

app.use(middlewares.lectureArticleJson);

//on indique le répertoire pour les ressources statiques
app.use(express.static('./static'));

app.use(router);

app.use(middlewares.error);


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});