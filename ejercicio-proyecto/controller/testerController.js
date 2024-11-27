const Tester = require("../models/tester");
const testerInstancia=new Tester();
exports.traertesters = async (req, res) => {
    try {
      let resultado = await testerInstancia.listartodos();
      console.log(resultado);
      res.json(resultado);
    } catch (error) {
      res.json({ error: "error al obtener testers" });
    }
  };
  exports.adicionartesters = async (req, res) => {
    try {
      let resultado = await testerInstancia.guardarTesters(req.body);
      res.json(resultado);
    } catch (e) {
      res.json({ e: "error al agregar un tester" });
    }
  };
  exports.actualizartesters = async (req, res) => {
    try{
      let resultado=await testerInstancia.actualizarTesters(req.body);
      res.json({resultado});
      } catch(err) {
        res.json({error: "Error al actualizar un tester " + err});
      }
  };
  exports.eliminartesters = async (req, res) => {
    try{
      let resultado= await testerInstancia.eliminarTesters(req.params.id);
      if(resultado){
        res.json({mensaje: "Se elimino correctamente el tester"});
      }
      } catch(error) {
        res.json({error: "Error al eliminar un tester " + error});
      }
  };
  exports.mostrarInfo = async (req, res) => {
    try{
      let resultado= await testerInstancia.testerMasPrueba(req.body,req.params.id);
      res.json({resultado});
      } catch(err) {
        res.json({error: "No se pudo realizar la consulta " + err});
      }
  };