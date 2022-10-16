import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

const SeeDetails = (props) => {
    const {id}= useParams()
    const [puppy, setPuppy] = useState({})
    useEffect(()=>{
        async function getPuppy(){
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players/${id}`);
                const result = await response.json();
                const puppyData = result.data.player;
                setPuppy(puppyData)
            }catch (err) {
                console.error(err);
            }
        }
        getPuppy()
    },[])
return(
<div class='puppy' id='seeDetails' route='SeeDetails'>
    <div>{puppy.name}</div>
     <div>{puppy.id}</div>
     <img class='puppyUrl' src={puppy.imageUrl}></img>
      <div>{puppy.breed}</div>
      <div>{puppy.status}</div>
      <div>{`team ${puppy.teamId}`}</div>
      <Link to='./AllPuppies'>Go Back</Link>
</div>
)
}

export default SeeDetails;