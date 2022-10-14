import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

const SeeDetails = (props) => {
    const {id}= useParams()
    const [puppy, setPuppy] = useState({})
    console.log(props)
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
<div route="SeeDetails"> 
    <SinglePuppy puppy={puppy} />
    <Link to='/AllPuppies'>Go Back</Link>
    <div>Team Members
        {puppy.team ? 
        puppy.team.players.map((teammate)=>{
            return <SinglePuppy puppy={teammate} />
        })
        : <div>This Puppy Doesn't have a team yet</div>}
    </div>
</div>
)
}

export default SeeDetails;