import { useState } from "react"
export const UseStateHook=()=>{
    let [data,setdata]=useState("Akshay")
    return <>
   <center>
   <input type="text" name="" id=""  onChange={(g)=>{
    setdata(g.target.value)

   }}/>
   <h1>{data}</h1>
   
   </center>

   
    </>
}