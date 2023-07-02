const { Router } = require('express');
const { deleteUsuarios, putUsuarios, postUsuarios, getUsuarios } = require('../controllers/usuarios.controller');
const routes = Router();

routes.get('/', getUsuarios);
routes.post('/', postUsuarios);
routes.put('/:id', putUsuarios);
routes.delete('/:id', deleteUsuarios);


module.exports = routes;