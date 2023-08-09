//va a arrancar la aplicacion
import app from './src/app.js';
import {sequelize} from './src/config/db.config.js';
//import { configureAssociations } from './src/association.js'; // Importa la función de relaciones



async function main() {
    try {
        await sequelize.sync({force: false}) //nos sincroniza con la base de datos(trata de crear tablas entre otro)
       // configureAssociations(); // Configura las relaciones después de sincronizar
        app.listen(3000)
console.log('Server is Listening on  Port', 3000)
    } catch (error) {
        console.log('no se realizo coneccion:', error)
    }
};

main();