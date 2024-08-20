import { useEffect, useState } from "react"
import { apicaller } from "../api/api"


export const UseEffectHook=()=>{


    let [apidata,setapidata]=useState([])
    useEffect(()=>{
        (async()=>{
         
         setapidata(await apicaller())
        })()
        

    },[])
   console.log(apidata)
    return <>
    api data
    {apidata.map((a:any)=>{
        return <img width="200px" height="200px" src={a.image} />
    })}


    </>
}