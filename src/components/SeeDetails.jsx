import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

const SeeDetails = (props) => {
    const {id}= useParams()
    const [puppy, setPuppy] = useState({})
    console.log(puppy)
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
<div id='seeDetails'route='SeeDetails'>{`See Details of ${puppy.name}`}
    <div>{puppy.name}</div>
     <div>{puppy.id}</div>
     <img src={puppy.imageUrl}></img>
      <div>{puppy.status}</div>
      <Link to='./AllPuppies'>Go Back</Link>
</div>
)
}

export default SeeDetails;