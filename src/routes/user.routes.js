import {Router} from 'express';
const router = Router();
import { getUser, createUser, updateUser, deleteUser, getUsers} from '../controllers/user.controller.js';
//import { postUserBootcamp } from '../controllers/user.controller.js';

//para tener tareas, tablas de tareas
router.get('/user', getUser);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.get('/user/:id', getUsers);

//router.post('/bootcampuser', postUserBootcamp);
   



export default router;