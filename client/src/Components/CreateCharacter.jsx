import React, { useEffect, useState } from 'react';
import SelectEpisodes from './SelectEpisodes';

function CreateCharacter() {
  
    let [selectedEpisodes, setselectedEpisodes] = useState([]);
    let [inputs, setInputs] = useState({
        name: "",
        species: "",
        origin: "",
        image: "",
        episode: ["A Rickle in Time"]
    })

    function addEpisode(episode){
        let nameOfEpisode = episode.selectedOptions[0].text;
        console.log("Name:",nameOfEpisode);
        let idOfEpisode = episode.value;
        console.log("Value:",idOfEpisode);

        
        
        //Meter nombres en el div para el usuario
        if(selectedEpisodes.length<1){
            setselectedEpisodes([...selectedEpisodes, nameOfEpisode], console.log(selectedEpisodes));
        } else{
            selectedEpisodes.forEach(data=>{
                if(nameOfEpisode===data) return alert('Personaje ya agregado')
                else {
                    setselectedEpisodes([...selectedEpisodes, nameOfEpisode], console.log(selectedEpisodes));
                }
            })
        }
    }

    function handleChange(e) {
        e.preventDefault(); //está de más, pero es para que no se recargue la página 
        setInputs((input) => ({...input, [e.target.name]: e.target.value}));


    }
    

    async function onSubmit(e){
        e.preventDefault();
        const response = await fetch('http://localhost:3001/post', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(inputs) // body data type must match "Content-Type" header
          });
          return response.json(); // parses JSON response into native JavaScript objects
        }
    
  
    return (
    <div>
        <form>
        <label htmlFor=""></label>
        <input type="text" name="name" id="" placeholder='Name' onChange={(e)=>handleChange(e)}/>               <br />
        <input type="text" name="species" id="" placeholder='Specie' onChange={(e)=>handleChange(e)}/>           <br />
        <input type="text" name="origin" id="" placeholder='Origin' onChange={(e)=>handleChange(e)}/>           <br />
        <input type="text" name="image" id="" placeholder='Image' onChange={(e)=>handleChange(e)}/>             <br />
        <SelectEpisodes />            
        <input type="button" value="addEpisode" onClick={()=>{addEpisode(document.getElementById('selectBox'))}}/> <br />
        <input type="button" value="Create" onClick={(e)=>onSubmit(e)}/>
        <div>
            <h2>Episodios dónde aparece su personaje</h2>
            {selectedEpisodes}
        </div>
        </form>
    </div>
  );
};

export default CreateCharacter;