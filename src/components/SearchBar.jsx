import React from 'react'

const SearchBar = (props)=> {
    const puppy = props.puppy
    const [input,setInput]= useState(0);

    function search(name, breed){
        if(name == input){
            return setInput(puppy)
        }
        if(breed == input){
           return setInput(puppy)
        }
    }
    

    return(
        <div id="SearchBar">
        <p>{'Name:'}</p>
        <input>{}</input>
        <p>{'Breed:'}</p>
        <input>{}</input>
        <button onClick={search()}>'SUBMIT'</button>
        </div>
    )
}


export default SearchBar;