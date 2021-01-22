const { request, response } = require('express');
const express = require('express');

const router = express.Router();

const articles = require('../data/article.json');

router.get('/', (request, response) =>{
    response.render('index', {articles});
});

module.exports = router;