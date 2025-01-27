const {Router} = require("express")
const usuariosControllers = require("../controllers/usuario.controllers.js")

const router = Router()

router.get("/", usuariosControllers.getUsers)
router.get("/:id", usuariosControllers.getUserById)
router.post("/",usuariosControllers.createUser)
router.put("/:id",usuariosControllers.updateUser)
router.delete("/:id",usuariosControllers.deleteUserById)
router.post("/login",usuariosControllers.loginUser)


module.exports = router