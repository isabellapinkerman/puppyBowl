import React from 'react'
import SeeDetails from './SeeDetails'

const SinglePuppy = (props) => {
const puppy=props.element
console.log(puppy)
return (
<div className="puppy" key={`puppy-${puppy.id}`}>
                <div>{puppy.name}</div>
                <div>{puppy.id}</div>
                <div>{puppy.imageURL}</div>
                <div>{puppy.status}</div>
                <SeeDetails />
            </div>
)}

export default SinglePuppy