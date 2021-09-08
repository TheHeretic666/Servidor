const express = require("express") //Cargar modulo del servidor

const servidor = express() //ejecutar el modulo del servidor

servidor.listen(8081) //Escuchando el puerto 8081

servidor.get("/",(req,res)=>{res.send("Servidor funcionando")})


