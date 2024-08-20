import { Grid, Paper, TextField, Button } from "@mui/material"

import './login.css'
import { NavLink } from "react-router-dom"
export const Login=()=>{
    return <div className="container1"> 
    <Paper style={{padding:'100px'}}>

  
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"

>
<h1>LoginPage</h1>
<TextField id="outlined-basic" label="Email" variant="outlined" />
<br />
<TextField id="outlined-basic" label="Password" variant="outlined" />
<br />
<Grid
  container
  direction="row"
  justifyContent="space-around"
  alignItems="center"
><NavLink to={'/register'}>
<Button variant="outlined">Register</Button></NavLink>
<NavLink to={'/home'}>
<Button variant="contained">Login</Button></NavLink>


</Grid>


</Grid>
</Paper>
  

    
    </div>
    
    }