require("dotenv").config();
const { Router } = require('express');
const {Character, Episode} = require ("../../db")
const axios = require("axios")



const router = Router();


router.get("/" ,async(req,res,next) => {
    try {
        let allEpisodeApi = await axios.get("https://rickandmortyapi.com/api/episode")
        allEpisodeApi.data.results.forEach(e=>{
            Episode.findOrCreate({
                where:{name:e.name}
            })
        })
        let allEpisodeDb = await Episode.findAll()
        // (Ordenar por nombre) allEpisodeDb.sort((a,b)=> a.name.localeCompare(b.name))
        res.send(allEpisodeDb)
   
    } catch (error) {
        next(error)
    }
   })

   module.exports = router;