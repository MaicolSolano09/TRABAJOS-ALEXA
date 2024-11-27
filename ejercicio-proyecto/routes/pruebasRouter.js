const express=require('express');
let pruebasController=require('../controller/pruebasController');

let router=express.Router();
router.get('/',pruebasController.traerpruebas);
router.post('/',pruebasController.adicionarpruebas);
router.put('/:id',pruebasController.actualizarpruebas);
router.delete('/:id',pruebasController.eliminarpruebas);


module.exports=router;