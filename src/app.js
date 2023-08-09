//va a tener la configuracion de express
import express from 'express';
import userRoutes from './routes/user.routes.js';
import bootcampRoutes from './routes/bootcamp.routes.js';
import newbootcampRoutes from './routes/newBootcamp.routes.js';

const app = express();

//middlewares
app.use(express.json());


app.use(userRoutes);
app.use(bootcampRoutes);
app.use(newbootcampRoutes);

export default app;