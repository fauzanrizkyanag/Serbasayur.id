const {
  addProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  editProductByIdHandler,
  deleteProductByIdHandler,
} = require('./products_handler');
const {
  addUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  editUserByIdHandler,
  deleteUserByIdHandler,
} = require('./users_handler');

const routes = [
  {
    method: 'POST',
    path: '/products',
    handler: addProductHandler,
  },
  {
    method: 'GET',
    path: '/products',
    handler: getAllProductsHandler,
  },
  {
    method: 'GET',
    path: '/products/{idProduk}',
    handler: getProductByIdHandler,
  },
  {
    method: 'PUT',
    path: '/products/{idProduk}',
    handler: editProductByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/products/{idProduk}',
    handler: deleteProductByIdHandler,
  },
  {
    method: 'POST',
    path: '/users',
    handler: addUserHandler,
  },
  {
    method: 'GET',
    path: '/users',
    handler: getAllUsersHandler,
  },
  {
    method: 'GET',
    path: '/users/{idUser}',
    handler: getUserByIdHandler,
  },
  {
    method: 'PUT',
    path: '/users/{idUser}',
    handler: editUserByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/users/{idUser}',
    handler: deleteUserByIdHandler,
  },
];

module.exports = routes;
