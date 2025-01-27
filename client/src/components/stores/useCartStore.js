import {create} from "zustand"

export const useCartStore = create((set)=>({
    cart: JSON.parse(localStorage.getItem("cart")) || [],
   //Agregar producto 
    addProductToCart: (producto)=>
        set((state)=>{
            //Verificar si hay un producto con el mismo id
            const productoIndex = state.cart.findIndex((item)=>item.id === producto.id)
            if (productoIndex !== -1){
                const updateCart = state.cart.map((item)=>{
                    if(item.id === producto.id){
                        return {...item, cantidad: item.cantidad + 1}
                    }
                    return item
                })
                localStorage.setItem("cart", JSON.stringify(updateCart))
                return {cart:updateCart}
            }
            const updateCart = [...state.cart, {...producto, cantidad: 1}];
            localStorage.setItem("cart", JSON.stringify(updateCart))
            return {cart:updateCart}
        })
        ,
    //Borrar producto
    deleteProduct: (producto) => 
        set((state) => {
            const updateCart = state.cart.map((item) => {
                if (item.id === producto.id) {
                    const nuevaCantidad = item.cantidad - 1;
                    // Si la cantidad llega a 0, lo eliminamos después
                    return { ...item, cantidad: Math.max(0, nuevaCantidad) };
                }
                return item;
            }).filter((item) => item.cantidad > 0); // Eliminamos productos con cantidad 0
            
            localStorage.setItem("cart", JSON.stringify(updateCart));
            return { cart: updateCart };
        }),
    //Limpiar carrito
    cleanProduct: ()=>
        set((state)=>{
            localStorage.removeItem("cart")
            return {cart:[]}
        }),
  
        
        
}))

