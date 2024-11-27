const pruebasRoutes = require("./routes/pruebasRouter");
const proyectosRoutes=require("./routes/proyectoRouter");
const testers=require("./routes/testerRouter")
const express = require("express");
const app = express();
require("dotenv").config();4

app.use(express.json());

app.use("/api/pruebas", pruebasRoutes); //llamando a ruta
app.use("/api/proyectos",proyectosRoutes);
app.use("/api/testers",testers)

const port=process.env.PORT;

app.listen(port,()=>{
    console.log("El sevidor esta corriendo el puerto"+port)
})