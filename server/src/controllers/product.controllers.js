const connection = require("../db/db.js")

const getAllProducts = (req, res)=>{
  connection.query("SELECT * FROM productos", (err,result,fields)=>{
    if(err){
        console.err(err)
        res.status(500).json({status:"failure", message: err.message})
    }

    res.status(200).json(result)
})
}

const getProductById = (req,res)=>{
    const {id} = req.params
    connection.query("SELECT * FROM productos WHERE id = ?", [id], (err,result,fields)=>{
        if(err){
            console.err(err)
            res.status(500).json({status:"failure", message: err.message})
        }
    
        res.status(200).json(result)
    })
}

const createProduct = (req,res)=> {
    const {nombre, artista, precio, descripcion} =req.body

    connection.query("INSERT INTO productos (nombre,artista,precio,descripcion) VALUES (?,?,?,?)" ,
        [nombre,artista,precio,descripcion],
        (err, result,fields)=>{
            if(err){
                console.err(err)
                res.status(500).json({status:"failure", message: err.message})
            }
            res.status(200).json(result)
        }
    ) 
    
    
}

const updateProduct = (req,res)=>{
    const {id} = req.params
    const {nombre, artista, precio, descripcion} =req.body

    connection.query("UPDATE productos SET nombre = ?, artista = ?, precio = ?, descripcion = ? WHERE id = ? LIMIT 1", 
        [nombre,artista,precio,descripcion,id], 
        (err, result,fields)=>{
            if(err){
                console.err(err)
                res.status(500).json({status:"failure", message: err.message})
            }
            if(result.changedRows){
                res.status(200).json({status:"success", message:"Producto actualizado"})
            }else{
             res.status(200).json({status:"warning", message:"No se actualizo ningun producto"})   
            }
        }
    )
}


const deleteProductById = (req,res)=>{
    const {id} = req.params
    connection.query("DELETE FROM productos WHERE id = ? LIMIT 1", [id], (err,result,fields)=>{
        if(err){
            console.err(err)
            res.status(500).json({status:"failure", message: err.message})
        }
    
        res.status(200).json(result)
    })
}




module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProductById,
    updateProduct,
}