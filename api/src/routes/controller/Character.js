//const fetch = require('cross-fetch')
const { Op } = require("sequelize");
const axios = require('axios');
const {Episode, Character} = require('../../db.js');
const { Router } = require("express");
const route = Router();

async function getCharacters(){
    let x = 1;
    let call;
    let array = [];
    do{
        call = await axios.get(`https://rickandmortyapi.com/api/character?page=${x}`);
        x++;
        call.data.results.map((charac)=>{
            array.push({
                id: charac.id,
                name: charac.name,
                species: charac.species,
                origin: charac.origin,
                image: charac.image,
                created: charac.created,
                episodes: charac.episode
            }) 
            })
    }while(x<3);
    return array;

};


async function getEspisodes(){
    const characters = await Character.findAll({
        includes:{
            model: Episode,
            attributes: ["name"],
            through:{
                attributes: []
            }
        }
    })
    return characters;
};


async function getAllEpisodes(){
    const call = await getCharacters();
    const call1= await getEspisodes();
    const union = call.concat(call1)
    return union;
};


route.get('/', async (req, res)=>{
    const { name } = req.query;
    if(name){
        const data = await Character.findAll({
            where:{name:{
                [Op.iLike]: `%${name}%`
            },
            include: Episode
        }
    })
    if(data.length === 0){return res.status(404).json({msg: "Character no encontrado"})}
    res.status(200).json(data)
    }else{
    const result = await getAllEpisodes()
    res.status(200).send(result)
}
})






module.exports = route