import {Router} from 'express';
const router = Router();
import {getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp, getBootcamps} from '../controllers/bootcamp.controller.js'

//vamos a definir las rutas
router.get('/bootcamp', getBootcamp);     
router.post('/bootcamp', createBootcamp);
router.put('/bootcamp/:id', updateBootcamp);
router.delete('/bootcamp/:id', deleteBootcamp);
router.get('/bootcamp/:id', getBootcamps);

//router.get('/bootcamp/:id/user', getBootcampUser);

export default router;