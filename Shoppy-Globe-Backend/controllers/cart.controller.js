// show all cart items of logged in user
export const showCart = async (req, res) => {
  try {
    // get cart data and product details also
    const cart = await Cart.find({
      userId: req.user.id,
    }).populate("productId");

    res.status(200).json(cart);
  } catch (err) {
    // if something goes wrong
    res.status(500).json({
      message: err.message,
    });
  }
};

// add product in cart
export const addCartProduct = async (req, res) => {
  try {
    // get product id and quantity from body
    const { productId, quantity } = req.body;

    // check product exist or not
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // find item already in cart
    const existingItem = await Cart.findOne({
      userId: req.user.id,
      productId,
    });

    if (existingItem) {
      // increase quantity if item already exist
      existingItem.quantity += quantity;

      await existingItem.save();

      return res.status(200).json(existingItem);
    }

    // create new cart item
    const cartItem = await Cart.create({
      userId: req.user.id,
      productId,
      quantity,
    });

    res.status(201).json(cartItem);
  } catch (err) {
    // server error
    res.status(500).json({
      message: err.message,
    });
  }
};

// update quantity of cart item
export const updateCartItem = async (req, res) => {
  try {
    // get updated quantity
    const { quantity } = req.body;

    const item = await Cart.findByIdAndUpdate(
      req.params.id,
      { quantity },
      { new: true },
    );

    // item not found in cart
    if (!item) {
      return res.status(404).json({
        message: "Cart item not found",
      });
    }

    res.json(item);
  } catch (err) {
    // error while updating
    res.status(500).json({
      message: err.message,
    });
  }
};

// remove item from cart
export const deleteCartItem = async (req, res) => {
  try {
    const item = await Cart.findByIdAndDelete(req.params.id);

    // item not exist
    if (!item) {
      return res.status(404).json({
        message: "Cart item not found",
      });
    }

    res.json({
      message: "Item removed from cart",
    });
  } catch (err) {
    // server side error
    res.status(500).json({
      message: err.message,
    });
  }
};
