const conn = require("../database/database");
class Pruebas {
    async listartodos() {
      let [rows] = await conn.query("SELECT*FROM pruebas");
      return rows;
    }
    async guardarPruebas(pruebas) {
      let { FECHA_INICIO,FECHA_FINAL ,ID_PROYECTO,ID_TESTER} = pruebas;
      let [rest] = await conn.query(
        "INSERT INTO pruebas (FECHA_INICIO,FECHA_FINAL,ID_PROYECTO,ID_TESTER)VALUES (?, ?, ?, ?);",
        [FECHA_INICIO, FECHA_FINAL,ID_PROYECTO,ID_TESTER]
      );
      return rest;
    }
    async actualizarPruebas(pruebas){
      const{ID_PRUEBAS,FECHA_INICIO,FECHA_FINAL,ID_PROYECTO,ID_TESTER }=pruebas;
      let[actualize]=await conn.query('UPDATE pruebas SET FECHA_INICIO = ?, FECHA_FINAL = ?, ID_PROYECTO=?, ID_TESTER=? WHERE ID_PRUEBAS = ?',[FECHA_INICIO,FECHA_FINAL,ID_PROYECTO,ID_TESTER,ID_PRUEBAS]);
      return actualize;
    }
    async eliminarPruebas(id) {
      let [delet] = await conn.query(`DELETE FROM pruebas WHERE ID_PRUEBAS= ?`, [id]);
      return delet;
    }
  }
  module.exports = Pruebas;