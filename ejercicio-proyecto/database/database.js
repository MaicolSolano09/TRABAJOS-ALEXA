let mysql=require('mysql2/promise.js');
const conn=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'@stevenar09MAICOL',
    database: 'bdproyectos',
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
});
module.exports=conn;
