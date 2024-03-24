// handle business logic

const prisma = require("../db");
const {
  findProducts,
  findProductById,
  insertProduct,
  deleteProduct,
  updateProduct,
} = require("./product.repository");

const getAllProducts = async () => {
  const products = await findProducts();
  return products;
};

const getProductById = async (id) => {
  const product = await findProductById(id);

  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

const addProduct = async (productData) => {
  const product = await insertProduct(productData);
  return product;
};

const deleteProductById = async (id) => {
  await getProductById(id);
  await deleteProduct(id);
};

const editProductById = async (id, productData) => {
  await getProductById(id);
  const product = await updateProduct(id, productData);
  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  editProductById,
  deleteProductById,
};
