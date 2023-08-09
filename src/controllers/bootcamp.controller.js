//aca vamos a crear dos funciones

import {Bootcamp} from '../models/bootcamp.model.js'; //con este modelo ya puedo ejecturar consultas
import { User } from '../models/user.model.js';



export const getBootcamp = async (req, res) => {
   try {
    const bootcamp = await Bootcamp.findAll()
    res.json(bootcamp)
   } catch (error) {
    return res.status(500).json({message: error.message})
   }
};

export const getBootcamps = async (req, res) => {
try {
    const {id} = req.params
    const bootcamp = await Bootcamp.findOne({
     where: {
         id
     }
    })
    if (!bootcamp) return res.status(404).json({message: 'el bootcamp no existe'})
    res.json(bootcamp)
} catch (error) {
    return res.status(500).json({message: error.message})
}
};


export const createBootcamp = async (req, res) => { 
    const {title, cue, description} = req.body
    try {
        const newBootcamp = await Bootcamp.create({
            title,
            cue,
            description
        });
        res.json(newBootcamp)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

};

export const updateBootcamp = async (req, res) => {
   try {
    const { id } = req.params
    const {title, cue, description} = req.body
   const bootcamp = await Bootcamp.findByPk(id)
   
   bootcamp.title = title,
   bootcamp.cue = cue,
   bootcamp.description = description
   
  await bootcamp.save()
   res.json(bootcamp)
   } catch (error) {
    return res.status(500).json({message: error.message})
   }
};

export const deleteBootcamp = async (req, res) => {
   try {
    const { id } = req.params
    await Bootcamp.destroy({
        where: {
            id: id
        }
    })
    res.sendStatus(204)
   } catch (error) {
    return res.status(500).json({message: error.message})
   }
};


  
