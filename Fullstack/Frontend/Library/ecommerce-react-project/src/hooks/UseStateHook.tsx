import { useState } from "react"
export const UseStateHook=()=>{
    let [data,setdata]=useState("")
    let [data1,setdata1]=useState("")
    let  result=(parseInt(data)+parseInt(data1))

    return <>
   <center>
   <input type="number" name="" id=""  onChange={(g)=>{
    setdata(g.target.value)

   }}/>
    <input type="number" name="" id=""  onChange={(g)=>{
    setdata1(g.target.value)

   }}/>
   <h1>{data}, {data1}, {result}</h1>
   <button >clikk</button>
   </center>

   
    </>
}