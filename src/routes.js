const { Router } =  require('express');

const routes = Router();


routes.post('/users/:id', (request, response) => {
    console.log(request.body);
    return response.json({ message :'Oba Oba'});
})

module.exports = routes;
    