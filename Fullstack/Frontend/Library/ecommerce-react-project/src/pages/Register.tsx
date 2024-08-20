import { Grid, Paper, TextField, Button, Link } from "@mui/material"

import './login.css'
import { NavLink } from "react-router-dom";
export const Register=()=>{
    return <div className="container1"> 
    <Paper style={{padding:'100px'}}>

  
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"

>
<h1>Register Page</h1>
<TextField id="outlined-basic" label="Name" variant="outlined" />
<TextField id="outlined-basic" label="Email" variant="outlined" />
<br />
<TextField id="outlined-basic" label="Password" variant="outlined" />
<br />
<Grid
  container
  direction="row"
  justifyContent="space-around"
  alignItems="center"
>
<Button variant="outlined">Register</Button>
<NavLink to={'/login'}>
<Button variant="contained">Login</Button></NavLink>


</Grid>


</Grid>
</Paper>
  

    
    </div>
    
    }