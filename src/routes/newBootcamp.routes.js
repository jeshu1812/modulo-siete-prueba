import {Router} from 'express';
const router = Router();
import { getNewBootcamp, createNewBootcamp} from '../controllers/Newusuarios.js';
//import { postUserBootcamp } from '../controllers/user.controller.js';

//para tener tareas, tablas de tareas
router.get('/userbootcamp', getNewBootcamp);
router.post('/userbootcamp', createNewBootcamp);

   

export default router;