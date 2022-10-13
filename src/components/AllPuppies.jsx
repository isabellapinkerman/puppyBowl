import React from 'react';
import SinglePuppy from './SinglePuppy';

const AllPuppies = (props)=>{
    const myPuppies = props.puppyData
console.log(myPuppies)
    return (
        <div className="puppy">{myPuppies.length ?
        myPuppies.map((element, index)=>{
            return(
           <SinglePuppy element= {element} key={`allPupies:${index}`}/> )
        })
        :   <div>Loading the cutest Puppies...</div>
        }</div>
    )

}

export default AllPuppies;