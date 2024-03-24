// berkominkasi dengan database

const prisma = require("../db");

const findProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
};

const findProductById = async (id) => {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  return product;
};

const findProductByName = async (name) => {
  const product = await prisma.product.findUnique({
    where: {
      name,
    },
  });
  return product;
};

const insertProduct = async (data) => {
  const product = await prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      image: data.image,
    },
  });
  return product;
};

const deleteProduct = async (id) => {
  await prisma.product.delete({
    where: {
      id,
    },
  });
};

const updateProduct = async (id, data) => {
  const product = await prisma.product.update({
    where: {
      id,
    },
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      image: data.image,
    },
  });
  return product;
};

module.exports = {
  findProducts,
  findProductById,
  insertProduct,
  findProductByName,
  deleteProduct,
  updateProduct,
};
