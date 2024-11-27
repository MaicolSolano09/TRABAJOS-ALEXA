const Proyectos = require("../models/proyecto");

const proyectoInstancia=new Proyectos();
exports.traerProyectos = async (req, res) => {
    try {
      let resultado = await proyectoInstancia.listartodos();
      console.log(resultado);
      res.json(resultado);
    } catch (error) {
      res.json({ error: "error al obtener Proyectos" });
    }
  };
  exports.adicionarProyectos = async (req, res) => {
    try {
      let resultado = await proyectoInstancia.guardarProyecto(req.body);
      res.json(resultado);
    } catch (e) {
      res.json({ e: "error al agregar un Proyecto" });
    }
  };
  exports.actualizarProyectos = async (req, res) => {
    try{
      let resultado=await proyectoInstancia.actualizarProyecto(req.body);
      res.json({resultado});
      } catch(err) {
        res.json({error: "Error al actualizar un Proyecto " + err});
      }
  };
  exports.eliminarProyectos = async (req, res) => {
    try{
      let resultado= await proyectoInstancia.eliminarProyecto(req.params.id);
      if(resultado){
        res.json({mensaje: "Se elimino correctamente el Proyecto"});
      }
      } catch(error) {
        res.json({error: "Error al eliminar un Proyecto " + error});
      }
  };
  exports.mostrarInfo = async (req, res) => {
    try{
      let resultado= await proyectoInstancia.ProyectoMasPrueba(req.body,req.params.id);
      res.json({resultado});
      } catch(err) {
        res.json({error: "No se pudo realizar la consulta " + err});
      }
  };