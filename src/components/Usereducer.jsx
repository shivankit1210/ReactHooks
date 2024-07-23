import React from 'react'
import { useState } from 'react'
import {useReducer} from "react";


const Usereducer = () => {
    const initialstate = {count:0};

    const reducer= (state,action)=>{
        switch(action.type){
            case "increase" : {
                return {count: state.count+1}

            }

            case "decrease" : {
                return {count: state.count-1}

            }
            default : {
                return state
            }
        }
    }

   const [state, dispatch] = useReducer(reducer,initialstate)

  return (

    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"increase"})}>Increases</button>
        <button onClick={()=>dispatch({type:"decrease"})}>Decreases</button>

    </div>
  )
}

export default Usereducer