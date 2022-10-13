import React from 'react';

const AllPuppies = (props)=>{
    const myPuppies = props.puppyData
console.log(myPuppies)
    return (
        <div>{myPuppies.length ?
        myPuppies.map(()=>{
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        })
        :   <div>Loading the cutest Puppies...</div>
        }</div>
    )

}

export default AllPuppies;