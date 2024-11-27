const conn = require("../database/database");
class Tester {
  async listartodos() {
    let [rows] = await conn.query("SELECT*FROM tester");
    return rows;
  }
  async guardarTesters(tester) {
    let { NOMBRE_TESTER, APELLIDO_TESTER } = tester;
    let [rest] = await conn.query(
      "INSERT INTO tester (NOMBRE_TESTER,APELLIDO_TESTER )VALUES(?, ?);",
      [NOMBRE_TESTER, APELLIDO_TESTER]
    );
    return rest;
  }
  async actualizarTesters(tester) {
    const { ID_TESTER, NOMBRE_TESTER, APELLIDO_TESTER } = tester;
    let [actualize] = await conn.query(
      "UPDATE tester SET NOMBRE_TESTER = ?, APELLIDO_TESTER = ? WHERE ID_TESTER = ?",
      [NOMBRE_TESTER, APELLIDO_TESTER, ID_TESTER]
    );
    return actualize;
  }
  async eliminarTesters(id) {
    let [delet] = await conn.query(`DELETE FROM tester WHERE ID_TESTER = ?`, [
      id,
    ]);
    return delet;
  }
  async testerMasPrueba() {
    const result = await conn.query(
      `SELECT 
        T.NOMBRE_TESTER AS Nombre, 
        T.APELLIDO_TESTER AS Apellido, 
        COUNT(PR.ID_PRUEBAS) AS CantidadPruebas
      FROM 
        TESTER T
      JOIN 
        PRUEBAS PR ON T.ID_TESTER = PR.ID_TESTER
      GROUP BY 
        T.ID_TESTER, T.NOMBRE_TESTER, T.APELLIDO_TESTER
      ORDER BY 
        CantidadPruebas DESC
      LIMIT 1;`
    );

    return result[0];
  }
}
module.exports = Tester;
