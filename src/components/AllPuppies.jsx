import React from 'react';

const AllPuppies = (props)=>{
    const myPuppies = props.puppyData
console.log(myPuppies)
    return (
        <div className="puppy">{myPuppies.length ?
        myPuppies.map(()=>{
            return(
            <div key={`puppy-${puppy.id}`}>
                <div></div>
                <div></div>
                <div></div>
            </div>)
        })
        :   <div>Loading the cutest Puppies...</div>
        }</div>
    )

}

export default AllPuppies;