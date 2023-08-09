import { TableHints } from 'sequelize';
import {User} from '../models/user.model.js';
import {Bootcamp} from '../models/bootcamp.model.js';


export const getUser = async (req, res) => {
try {
    const user = await User.findAll()
res.json(user)
} catch (error) {
    return res.status(500).json({message: error.message})
}
};

export const createUser = async (req, res) => {
    try {
        const {firstName, lastName, correo} = req.body
       const newUser = await User.create(req.body)
        res.json(newUser)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const getUsers = async (req, res) => {
    const {id} = req.params
    try {
    
   const user = await User.findOne({
    where: {id}
   }) 
   res.json(user)
} catch (error) {
    return res.status(500).json({message: error.message})
}
};

export const updateUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findOne({
            where: { id }
        })
        user.set(req.body)
        await user.save()
        return res.json(user)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params
try {
   const result = await User.destroy({
        where: {id}
    })
    console.log(result)
    return res.sendStatus(204)
} catch (error) {
    return res.status(500).json({message: error.message})
}
};


///
//para poder relacionar las tablas 
/*export const postUserBootcamp = async (req, res) => { 
    const { title, usuarios } = req.body;
    try {
      // Crear un nuevo bootcamp
      const newBootcamp = await Bootcamp.create({ title });
  
      // Asociar usuarios al nuevo bootcamp
      for (const userName of usuarios) {
        const user = await User.findOne({ where: { firstName: userName } });
        if (user) {
          user.bootcampId = newBootcamp.id;
          await user.save();
        }
      }
  
      res.json(newBootcamp);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };*/