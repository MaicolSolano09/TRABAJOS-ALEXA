const express=require('express');
let testerController=require('../controller/testerController');

let router=express.Router();
router.get('/',testerController.traertesters);
router.post('/',testerController.adicionartesters);
router.put('/:id',testerController.actualizartesters);
router.delete('/:id',testerController.eliminartesters);
router.get('/testerMasPrueba',testerController.mostrarInfo)

module.exports=router;