const { request, response } = require('express');
const express = require('express');

const router = express.Router();

router.get('/', (request, response) =>{
    response.send('salut');
});

module.exports = router;