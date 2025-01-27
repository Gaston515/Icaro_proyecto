const express = require("express")
const productRouter = require ("./routes/product.routes.js")
const userRouter = require("./routes/usuario.routes.js")
const compraRouter = require("./routes/compras.routes.js")
const cors = require("cors")

const app = express()

const PORT = 3000

//Middlewares
app.use(cors()) // Para que pueda recibir peticiones de cualquier origen
app.use(express.json()) // Para que pueda recibir datos en formato JSON
app.use(express.urlencoded({extended:true})) // Para que pueda recibir datos de formularios
app.use(express.static("public")) // Para que se pueda acceder a la carpeta public


app.listen(PORT, ()=> console.log("Server iniciado en el puerto: " + PORT)) // Iniciar el servidor

// ROUTERS
app.use("/productos",productRouter) 
app.use("/usuarios",userRouter)
app.use("/compras",compraRouter)