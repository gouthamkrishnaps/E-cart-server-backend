const carts = require('../Model/cartModel')


exports.addToCartController = async(req,res)=>{
    const userId = req.payload
    const {id,title,price,description,category,image,rating,quantity} = req.body

    try {
        const existingProduct = await carts.findOne({_id:id,userId})
        if(existingProduct){
            existingProduct.quantity+=1
            existingProduct.grandTotal = 
            existingProduct.quantity*existingProduct.price
            res.status(200).json('item incremented')
        }
        else{
            const newProduct = new carts({
                id,title,price,description,category,image,rating,grandTotal:price,quantity
            })
            await newProduct.save()
            res.status(200).json('item added')
        }
    } catch (error) {
        console.log(error);
        res.status(401).json(error)
    }
}