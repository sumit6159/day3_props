import { useState } from "react";

export function Counter(){
   const [counter, setCounter] =useState(0)

   const handleChange =(value)=>{
        setCounter(counter+value)
   }
   return<div>
       <h1>Counter:{counter}</h1>
       <button onClick={()=>{handleChange(1)}}>Add1</button>
       <button onClick={()=>{
           if(counter===0){
            return
           }
           else{
            handleChange(-1)
           }
       }}>Sub1</button>
       <button onClick={()=>{handleChange(counter)}}>double</button>
   </div>
}