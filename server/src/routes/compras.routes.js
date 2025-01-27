const { Router} = require("express")
const comprasControllers = require("../controllers/compras.controllers.js")


const router = Router()

router.get("/", comprasControllers.getAllCompras)
router.get("/:id",comprasControllers.getCompraById)
router.post("/",comprasControllers.createCompra)
router.put("/:id",comprasControllers.updateCompra)
router.delete("/:id", comprasControllers.deleteCompraById)


module.exports = router