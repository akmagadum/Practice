import { colors } from "@mui/material"
import { Button } from "../components/Button"
import { CardContainer } from "../components/cards/CardContainer"
import { MuiButton } from "../components/mui/MuiButton"
import { Mycarousal } from "../components/mycarousal/Mycarousal"
import { MyNavbar } from "../components/mynavbar/MyNavbar"
import { CustomStyle } from "../components/styles/CustomStyle"

export const Home=()=>{
return<> 
<h1 >Welcome to Home Page</h1>
<MyNavbar/>
<br />
< Mycarousal/>
<br />
<CardContainer/>
<CardContainer/>
<CardContainer/>
<CardContainer/>
<Button/>
<MuiButton/>
<CustomStyle/>
</>

}