import express from 'express';
import { addUser, getUsers } from '../controller/user-controller.js';

const route = express.Router();

// Configurando a rota de autenticação
route.post('/authChat', addUser);
route.get('/users', getUsers);

export default route;