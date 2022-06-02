import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEpisodes } from '../redux/store/actions/actions';


const SelectEpisodes = () => {
    let dispatch = useDispatch();
    let episodes = useSelector((state)=> state.episodes)
    useEffect(()=>{
        dispatch(getEpisodes())
    },[dispatch]);
    
    

  return (
    <select id="selectBox">
        {episodes.data?.map(episode=>{
            return <option name={episode.name} key={episode.id} value={episode.id} >{episode.name}</option>
        })};
    </select> 
  )
}

export default SelectEpisodes

/*
{episodes.map(episode=>{
            console.log(episode)
        })};

{episodes.data?.map(episode=>{
            <option value="">{episode.name}</option>
        })}

*/