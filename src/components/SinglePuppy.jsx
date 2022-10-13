import React from 'react'

const SinglePuppy = (props) => {
const puppy=props.element
return (


<div key={`puppy-${puppy.id}`}>
                <div>{puppy.name}</div>
                <div>{puppy.breed}</div>
                <div>{puppy.status}</div>
            </div>
)}

export default SinglePuppy