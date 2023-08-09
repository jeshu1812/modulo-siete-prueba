import { newUser } from '../models/Newusuarios.model.js';

export const getNewBootcamp = async (req, res) => {
    try {
        const newuser = await newUser.findAll()
    res.json(newuser)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    };
    
    export const createNewBootcamp = async (req, res) => { 
        const {title, usuarios} = req.body
        try {
            const newUsuarioBoot = await newUser.create({
                title,
              usuarios
            });
            res.json(newUsuarioBoot)
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    
    };
    
   
      
    