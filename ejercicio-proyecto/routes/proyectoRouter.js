const express=require('express');
let proyectoController=require('../controller/proyectoController');

let router=express.Router();
router.get('/',proyectoController.traerProyectos);
router.post('/',proyectoController.adicionarProyectos);
router.put('/:id',proyectoController.actualizarProyectos);
router.delete('/:id',proyectoController.eliminarProyectos);
router.get('/proyectoMasPrueba',proyectoController.mostrarInfo)


module.exports=router;