import React from 'react'
import PuppyDetails from './PuppyDetails'

const SinglePuppy = (props) => {
const puppy=props.element
console.log(puppy)
return (
<div className="puppy" key={`puppy-${puppy.id}`}>
                <div>{puppy.name}</div>
                <div>{puppy.id}</div>
                <div>{puppy.breed}</div>
                <div>{puppy.status}</div>
                <PuppyDetails />
            </div>
)}

export default SinglePuppy