import React from 'react'
import { Link } from 'react-router-dom';

const SinglePuppy = (props) => {
const puppy=props.element
console.log(puppy)
return (
<div className="puppy" key={`puppy-${puppy.id}`}>
                <div>{puppy.name}</div>
                <div>{puppy.id}</div>
                <img src={puppy.imageUrl}></img>
                <Link to={`${puppy.id}`}>See Details</Link>
            </div>
)}

export default SinglePuppy