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
