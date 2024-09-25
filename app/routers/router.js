let express = require('express');
let router = express.Router();
 
//Importar tablas
const usuarios = require('../controllers/usuario.controller.js');
//const libros = require('../controllers/libro.controller.js');
//const autores = require('../controllers/autor.controller.js');

//Tabla usuarios
router.post('/api/usuarios/create', usuarios.create);
router.get('/api/usuarios/onebyid/:id', usuarios.getUsuarioById);
router.put('/api/usuarios/update/:id', usuarios.updateById);
router.delete('/api/usuarios/delete/:id', usuarios.deleteById);


module.exports = router;