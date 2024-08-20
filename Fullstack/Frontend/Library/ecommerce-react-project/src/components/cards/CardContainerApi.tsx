import { Grid } from "@mui/material"
import { MyCards } from "./MyCards"
import { useEffect, useState } from "react"
import { apicaller } from "../../api/api"



export const CardContainerApi=()=>{
    let [apidata,setapidata]=useState([])
    useEffect(()=>{
        (async()=>{
         
         setapidata(await apicaller())
        })()
        

    },[])
    return <>
    
    
<Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>
{apidata.map((a:any)=>{
        return  < MyCards  img={a.img} />
    })}
    
   
</Grid>

    
    
    
    
    </>
}