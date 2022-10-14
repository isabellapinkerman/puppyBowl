import React from 'react'
import SeeDetails from './SeeDetails'
import { Link } from 'react-router-dom';

const SinglePuppy = (props) => {
const puppy=props.element
console.log(puppy)
return (
<div className="puppy" key={`puppy-${puppy.id}`}>
                <div>{puppy.name}</div>
                <div>{puppy.id}</div>
                <img src={puppy.imageUrl}></img>
                <div>{puppy.status}</div>
                <Link to={puppy.id}>See Details</Link>
            </div>
)}

export default SinglePuppy