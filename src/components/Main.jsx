import React, {useState, useEffect} from "react";
import { Navbar, SearchBar, AllPuppies } from './'
 
const Main = () => {

  const [puppyData, setPuppyData] = useState([])
  useEffect(()=>{
     async function getPuppyData(){
         let response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-et-web-ft/players')
         let result = await response.json()
         const puppies = result.data.players
        setPuppyData(puppies)
     }
     getPuppyData()
    },[])

  return (
  <div id="main">
    <Navbar />
    <SearchBar />
    <AllPuppies puppyData={puppyData} />
  </div>
  );
};

export default Main;
