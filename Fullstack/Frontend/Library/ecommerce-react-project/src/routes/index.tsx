import { Outlet, useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

let allpages={
    path:'/',
element:<><Outlet/></>,
children:[
    {
        path:'home',
        element:<Home/>

    },
    {
    path:'login',
    element:<Login/>
    }
]
}

function Allroutes(){
    return useRoutes([allpages])
}
export default Allroutes