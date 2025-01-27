const connection = require("../db/db.js")

const getUsers = (req, res) =>{
    connection.query("SELECT * FROM usuarios", (err,result,fields)=>{
        if(err){
            console.err(err)
            res.status(500).json({status:"failure", message: err.message})
        }

        res.status(200).json(result)
    })
}

const getUserById = (req,res)=>{
    const {id} = req.params
    connection.query("SELECT * FROM usuarios WHERE id = ?", [id], (err,result,fields)=>{
        if(err){
            console.err(err)
            res.status(500).json({status:"failure", message: err.message})
        }
    
        res.status(200).json(result)
    })
}

const createUser = (req,res)=> {
    const {username, password, fullname, email, image} =req.body

    connection.query("INSERT INTO usuarios (username, password, fullname, email, image) VALUES (?,?,?,?,?)" ,
        [username, password, fullname, email, image],
        (err, result,fields)=>{
            if(err){
                console.error(err)
                res.status(500).json({status:"failure", message: err.message})
            }
            res.status(200).json(result)
        }
    ) 
    
    
}

const updateUser = (req,res)=>{
    const {id} = req.params
    const {username, password, fullname, email, image} =req.body

    connection.query("UPDATE usuarios SET username = ?, password = ?, fullname = ?, email = ?, image = ? WHERE id = ? LIMIT 1", 
        [username, password, fullname, email, image, id], 
        (err, result,fields)=>{
            if(err){
                console.error(err)
                res.status(500).json({status:"failure", message: err.message})
            }
            if(result.changedRows){
                res.status(200).json({status:"success", message:"Usuario actualizado"})
            }else{
             res.status(200).json({status:"warning", message:"No se actualizo ningun usuario"})   
            }
        }
    )
}

const deleteUserById = (req,res)=>{
    const {id} = req.params
    connection.query("DELETE FROM usuarios WHERE id = ? LIMIT 1", [id], (err,result,fields)=>{
        if(err){
            console.err(err)
            res.status(500).json({status:"failure", message: err.message})
        }
    
        res.status(200).json(result)
    })
}

//Login
const loginUser = (req,res)=>{    
    const {Email, password} = req.body
    connection.query("SELECT * FROM usuarios WHERE email = ? AND password = ?", [Email, password], (err,result,fields)=>{
        if(err){
            console.err(err)
            res.status(500).json({status:"failure", message: err.message})
        }
        if(result.length){
            res.status(200).json({status:"success", message:"Usuario logueado",userId:result[0].id, username:result[0].username})
            
        }else{
            res.status(200).json({status:"warning", message:"Usuario no encontrado"})
        }
    })
}

const usuario ={
    user: "pepe",
    pass: "1234"
}



module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUserById,
    loginUser
}