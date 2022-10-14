import React from 'react';
import SinglePuppy from './SinglePuppy';

const AllPuppies = (props)=>{
    const myPuppies = props.puppyData
    return (
        <div className="allPuppies">
            {myPuppies.length ?
                myPuppies.map((element, index)=>{
            return(
           <SinglePuppy element= {element} key={`allPuppies:${index}`}/> )
        })
        :   <div>Loading the cutest Puppies...</div>
        }</div>
    )

}

export default AllPuppies;