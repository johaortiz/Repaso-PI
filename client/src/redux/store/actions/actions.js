import axios from 'axios';
export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
export const GET_EPISODES = 'GET_EPISODES';


export function getAllCharacters(){
    return function (dispatch){
        return (
            axios.get('http://localhost:3001/characters')
            .then(character=>{
                dispatch({
                    type: GET_ALL_CHARACTERS,
                    payload: character.data
                })
            })
            .catch(err=>{
                console.log(err)
            })
        ) 
    }
}

export function getEpisodes(){
    return function (dispatch){
        return (
            axios.get('http://localhost:3001/episode')
            .then(episode=>{
                dispatch({
                    type:GET_EPISODES,
                    payload: episode
                })
            })
        )
    }
}