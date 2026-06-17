import Product from "../models/Product.js";

export async function getProducts(req, res) {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

export async function getProductById(req, res) {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

export async function createProduct(req, res) {
  try {
    const { name, price, description, stock, image } = req.body;
    const product = await Product.create({
      name : name,
      price : price,
      description : description,
      stock : stock,
      image : image,
    });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

export async function updateProduct(req, res) {
  try {
    const { name, price, description, stock, image } = req.body;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        price,
        description,
        stock,
        image
      },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.status(200).json(product);

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
}

export async function deletProduct(req , res){
    try{

        const item = await Product.findByIdAndDelete(req.params.id);

        if(!item){
            return res.status(404).json({
                message : "Product Not Found!"
            });
        }

        res.json({
            message : "Product Removed!"
        });

    }catch(err){
        res.status(500).json({
            message : err.message
        });
    }
}