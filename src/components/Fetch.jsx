import React, { useEffect, useState } from 'react';
const Fetch = (props) =>{
    const [data, setData] = useState()
 useEffect(()=>{
    async function getData(){
        let response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2206-ftb-et-web-ft/players')
        let jasonData = await response.json()
        console.log(jasonData)
       setData(jasonData)
    }
    getData()
   },[])

   console.log(data)

    return(
 <div className= 'puppy'> {data} </div>
 )}

export default Fetch;