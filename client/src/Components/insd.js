import React from "react";

export default function AddGame() {
    let [input, setInput] = React.useState({
        name:'', 
        image:'', 
        description:''
    });

    let handleChange = (e) => {
        e.preventDefault(); //está de más, pero es para que no se recargue la página 
        setInput((prev) => ({...prev, [e.target.name]: e.target.value}));
    };


    return (

        <div>
            <h1>Add Game</h1>
            <form>
                <label>
                    Title:
                    </label>
                    <input type={"text"} name={"title"} value={input.name}
                    onChange = {(e)=> handleChange(e)} />
                <br />
                <label>
                    Description:
                </label>
                     <input type={"text"} name={"description"} value={input.description}
                    onChange = {(e)=> handleChange(e)} />
                <br />
                <label>
                    Image:
                </label>
                     <input type={"text"} name={"image"} value={input.image}
                    onChange = {(e)=> handleChange(e)} />
                <br />


                <button>Submit</button>
            </form>
        </div>

    );
}