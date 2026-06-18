import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

export const showCart = async (req, res) => {
    try {

        const cart = await Cart.find({
            userId: req.user.id
        }).populate("productId");

        res.status(200).json(cart);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });
    }
};

export const addCartProduct = async (req, res) => {
    try {

        const { productId, quantity } = req.body;

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        const existingItem = await Cart.findOne({
            userId: req.user.id,
            productId
        });

        if (existingItem) {

            existingItem.quantity += quantity;

            await existingItem.save();

            return res.status(200).json(existingItem);
        }

        const cartItem = await Cart.create({
            userId: req.user.id,
            productId,
            quantity
        });

        res.status(201).json(cartItem);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

export const updateCartItem = async (req,res)=>{
    try{
        const { quantity } = req.body;

        const item = await Cart.findByIdAndUpdate(
            req.params.id,
            { quantity },
            { new : true }
        );

        if(!item){
            return res.status(404).json({
                message : "Cart item not found"
            });
        }

        res.json(item);

    }catch(err){
        res.status(500).json({
            message : err.message
        });
    }
}

export const deleteCartItem = async (req,res)=>{
    try{

        const item = await Cart.findByIdAndDelete(req.params.id);

        if(!item){
            return res.status(404).json({
                message : "Cart item not found"
            });
        }

        res.json({
            message : "Item removed from cart"
        });

    }catch(err){
        res.status(500).json({
            message : err.message
        });
    }
}