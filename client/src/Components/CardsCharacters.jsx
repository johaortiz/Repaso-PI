import React from "react";
// --> /bnb/jj/jhhj/hhj/5

export default function CardsCharacters({ name, species, origin, image, episodes} ){
   
    let episode = episodes.map((episode)=>{
        return `${episode.split('/').pop()}, `;
    })

    return <>
        <h2>{name}</h2>
        <img src={image} alt={name} width={100} height={100} />
        <p>
            {species} <br/>
            {origin.name} <br/>
            {episode} <br/>
        </p>
    </>
}