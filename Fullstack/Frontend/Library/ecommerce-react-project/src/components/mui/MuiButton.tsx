import { Button } from "@mui/material"

export const MuiButton=()=>{
    return <>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    
    </>
}