import React, { useState, useEffect } from 'react'
import AppContext from './AppContext'
import axios from "axios";

export default function AppContextProvider(props) {
  
  const [userGoals, setUserGoals] = useState(undefined);

  const fetchGoals = async () =>{

    try{
      const res = await axios.get(`https://m2x3ewcsne.execute-api.us-east-2.amazonaws.com/beta/goals`);
      setUserGoals({goals: res.data});
    }catch(err){
      console.log(`An error has occured while fetching goal data: ${err}`);
    }
  }

  useEffect(() => {
    console.log('Fetching')
    fetchGoals();
  },[])

  return (
    <AppContext.Provider value={{goals: userGoals, setGoals : setUserGoals}}>
      {props.children}
    </AppContext.Provider>
  )
}
