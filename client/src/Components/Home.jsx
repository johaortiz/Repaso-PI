import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllCharacters } from "../redux/store/actions/actions";
import CardsCharacters from "./CardsCharacters";


export function Home(){
    let dispatch = useDispatch();
    let characters = useSelector((state)=> state.characters)
    useEffect(()=>{
        dispatch(getAllCharacters())
    },[dispatch]);
    

    return <>
        {characters.map((character)=>{
            console.log(character)
            return <CardsCharacters 
                key={character.id} 
                name={character.name} 
                species={character.species} 
                origin={character.origin} 
                image={character.image} 
                episodes={character.episodes}
                />
        })}
    </>
};
