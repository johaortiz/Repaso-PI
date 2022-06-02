const { Router } = require("express");
const cors = require('cors');
const {Episode, Character} = require('../../db.js');




const route = Router();

// route.use(cors());

route.post('/', async(req,res,next)=>{
    const { name, species, origin, image, episode } = req.body;
    try {
        let CreatedCharacter = await Character.findOrCreate({
            where:{
                name:name,
                species:species,
                origin:origin,
                image:image
            }
        });
        const episodesOfCharacter = await Episode.findAll({
            where: { name: episode }
        });
        CreatedCharacter[0].addEpisode(episodesOfCharacter);

        res.send(CreatedCharacter)
        console.log(CreatedCharacter)
    } catch (err) {
        next(err)
    }
})


/*
route.post("/", async(req, res, next) =>{
    const { name, species , origin, image, episodes } = req.body;



    let CharacterCreated = await Character.create({
      name,
      species,
      origin,
      image,
    })

    const genresGame = await Episode.findAll({
      where: { name : episodes }
    })
    CharacterCreated.addEpisode(genresGame)

      res.send('Your game was created successfully')
 
})
*/


module.exports = route;