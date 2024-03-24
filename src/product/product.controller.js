// layer untuk handle request dan response
// handle validasi body

const express = require("express");
const {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProductById,
  editProductById,
} = require("./product.services");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await getAllProducts();

  res.status(200).send({
    success: true,
    message: "Product fetched successfully",
    data: products,
  });
});

router.get("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);

    const product = await getProductById(productId);

    res.status(200).send({
      success: true,
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newProductData = req.body;
    const product = await addProduct(newProductData);
    res.status(201).send({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteProductById(parseInt(id));
    res.send({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const productData = req.body;

    if (
      !(
        productData.image &&
        productData.name &&
        productData.description &&
        productData.price
      )
    ) {
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }
    const product = await editProductById(parseInt(id), productData);

    res.send({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const productData = req.body;
    const product = await editProductById(parseInt(id), productData);
    res.send({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
