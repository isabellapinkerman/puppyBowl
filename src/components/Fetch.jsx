import React, { useEffect } from 'react';

const Fetch = (props) =>{
 useEffect(()=>{
    async function getData(){
        let response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2206-ftb-et-web-ft/players')
        let jasonData = await response.json()
        console.log(jasonData)
    }
    getData()
   },[])

    return(
 <div></div>
 )}

export default Fetch;