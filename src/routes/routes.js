// src/routes/routes.js
const express = require('express');
const routes = express.Router();

// Middlewares
const { authMiddleware } = require('../middlewares/auth');          // Funcionários
const { authClienteMiddleware } = require('../middlewares/authCliente'); // Clientes

// Controllers
const AuthFuncionario = require('../controllers/auth');       // Funcionários
const AuthCliente = require('../middlewares/authCliente');   // Clientes
const Cliente = require('../controllers/cliente');
const Pedido = require('../controllers/pedido');
const Item = require('../controllers/itemPedido');
const Funcionario = require('../controllers/funcionario');
const Estoque = require('../controllers/movimentoEstoque');
const Produto = require('../controllers/produto');
const { checkout } = require('../controllers/checkout');

// Rota principal
routes.get('/', (req, res) => res.json({ titulo: 'Pizzaria Seu Zé' }));

// --- Autenticação Funcionário ---
routes.post('/auth/register', AuthFuncionario.register);
routes.post('/auth/login', AuthFuncionario.login);

// --- Autenticação Cliente ---
routes.post('/clientes/register', AuthCliente.register);
routes.post('/clientes/login', AuthCliente.login);

// --- Rotas protegidas de cliente ---
routes.get('/clientes', authClienteMiddleware, Cliente.read); //Dados do cliente logado
routes.get('/clientes/:id', authClienteMiddleware, Cliente.readOne);
routes.put('/clientes/:id', authClienteMiddleware, Cliente.update);
routes.delete('/clientes/:id', authClienteMiddleware, Cliente.remove);

// Pedidos do cliente
routes.post('/pedidos', Pedido.create);
routes.get('/pedidos', Pedido.read);
routes.get('/pedidos/:id', Pedido.readOne);
routes.put('/pedidos/:id',  Pedido.update);
routes.delete('/pedidos/:id', Pedido.remove);

// Itens de pedido
routes.post('/itens', Item.create);
routes.get('/itens', Item.read);
routes.get('/itens/:id', Item.readOne);
routes.put('/itens/:id', Item.update);
routes.delete('/itens/:id', Item.remove);

// Checkout
routes.post('/checkout', authClienteMiddleware, checkout);

// --- Rotas protegidas de funcionário ---
routes.get('/funcionarios', Funcionario.read);

// Estoque
routes.post('/estoque', Estoque.create);
routes.get('/estoque',  Estoque.read);

// Produtos
routes.post('/produtos', Produto.create);
routes.get('/produtos', Produto.read);

module.exports = routes;
