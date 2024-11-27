const Pruebas = require("../models/pruebas");

const pruebasInstancia=new Pruebas();
exports.traerpruebas = async (req, res) => {
    try {
      let resultado = await pruebasInstancia.listartodos();
      console.log(resultado);
      res.json(resultado);
    } catch (error) {
      res.json({ error: "error al obtener pruebas" });
    }
  };
  exports.adicionarpruebas = async (req, res) => {
    try {
      let resultado = await pruebasInstancia.guardarPruebas(req.body);
      res.json(resultado);
    } catch (e) {
      res.json({ e: "error al agregar un pruebas" });
    }
  };
  exports.actualizarpruebas = async (req, res) => {
    try{
      let resultado=await pruebasInstancia.actualizarPruebas(req.body);
      res.json({resultado});
      } catch(err) {
        res.json({error: "Error al actualizar una pruebas " + err});
      }
  };
  exports.eliminarpruebas = async (req, res) => {
    try{
      let resultado= await pruebasInstancia.eliminarPruebas(req.params.id);
      if(resultado){
        res.json({mensaje: "Se elimino correctamente las pruebas"});
      }
      } catch(error) {
        res.json({error: "Error al eliminar las pruebas " + error});
      }
  };
  