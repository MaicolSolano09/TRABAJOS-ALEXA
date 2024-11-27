const conn = require("../database/database");
class Proyectos {
  async listartodos() {
    let [rows] = await conn.query("SELECT*FROM proyecto");
    return rows;
  }
  async guardarProyecto(proyecto) {
    let { NOMBRE_PROYECTO } = proyecto;
    let [rest] = await conn.query(
      "INSERT INTO proyecto (NOMBRE_PROYECTO)VALUES(?);",
      [NOMBRE_PROYECTO]
    );
    return rest;
  }
  async actualizarProyecto(proyecto) {
    const { ID_PROYECTO, NOMBRE_PROYECTO } = proyecto;
    let [actualize] = await conn.query(
      "UPDATE proyecto SET NOMBRE_PROYECTO=? WHERE ID_PROYECTO = ?",
      [NOMBRE_PROYECTO, ID_PROYECTO]
    );
    return actualize;
  }
  async eliminarProyecto(ID_PROYECTO) {
    let [delet] = await conn.query(
      `DELETE FROM proyecto WHERE ID_PROYECTO = ?`,
      [ID_PROYECTO]
    );
    return delet;
  }
  async ProyectoMasPrueba() {
    const result = await conn.query(
      `SELECT 
          P.NOMBRE_PROYECTO AS Nombre_Proyecto, 
          COUNT(PR.ID_PRUEBAS) AS Cantidad_Pruebas 
        FROM 
          PROYECTO P 
        JOIN 
          PRUEBAS PR 
        ON 
          P.ID_PROYECTO = PR.ID_PROYECTO 
        GROUP BY  
          P.ID_PROYECTO, P.NOMBRE_PROYECTO 
        ORDER BY 
          Cantidad_Pruebas DESC 
        LIMIT 1;`
    );

    return result[0];
  }
}

module.exports = Proyectos;
