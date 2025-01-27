const connection = require("../db/db.js")

const getAllCompras = (req, res)=>{
  connection.query("SELECT * FROM compras", (err,result,fields)=>{
    if(err){
        console.err(err)
        res.status(500).json({status:"failure", message: err.message})
    }

    res.status(200).json(result)
})
}

const getCompraById = (req,res)=>{
    const {id} = req.params
    connection.query("SELECT * FROM compras WHERE id = ?", [id], (err,result,fields)=>{
        if(err){
            console.err(err)
            res.status(500).json({status:"failure", message: err.message})
        }
    
        res.status(200).json(result)
    })
}

const createCompra = (req,res)=> {
    const { productos, total, id_usuario} =req.body

    connection.query("INSERT INTO compras ( productos, total, id_usuario) VALUES (?,?,?)" ,
        [ productos, total, id_usuario],
        (err, result,fields)=>{
            if(err){
                console.err(err)
                res.status(500).json({status:"failure", message: err.message})
            }
            res.status(200).json(result)
        }
    ) 
    
    
}

const updateCompra = (req,res)=>{
    const {id} = req.params
    const {productos, total, id_usuario} =req.body

    connection.query("UPDATE compras SET productos = ?, total = ?, id_usuario = ? WHERE id = ? LIMIT 1", 
        [productos, total, id_usuario, id], 
        (err, result,fields)=>{
            if(err){
                console.err(err)
                res.status(500).json({status:"failure", message: err.message})
            }
            if(result.changedRows){
                res.status(200).json({status:"success", message:"Compra actualizada"})
            }else{
             res.status(200).json({status:"warning", message:"No se actualizo ninguna compra"})   
            }
        }
    )
}

const deleteCompraById = (req,res)=>{
    const {id} = req.params
    connection.query("DELETE FROM compras WHERE id = ? ", [id], (err,result,fields)=>{
        if(err){
            console.err(err)
            res.status(500).json({status:"failure", message: err.message})
        }
        if(result.affectedRows){
            res.status(200).json({status:"success", message:"Compra eliminada"})
        }else{
            res.status(200).json({status:"warning", message:"No se elimino ninguna compra"})
        }
    })
}

module.exports = {
    getAllCompras,
    getCompraById,
    createCompra,
    updateCompra,
    deleteCompraById
}
