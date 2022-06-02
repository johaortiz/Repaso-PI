const { Router } = require("express");
const Character = require("./controller/Character");
const Episode = require('./controller/GetEpisodes')
const PostCharacter = require('./controller/postCharacter')
const route = Router();


// Configurar los routers

route.use('/characters', Character);
route.use('/episode', Episode);
route.use('/post', PostCharacter);


module.exports = route;
