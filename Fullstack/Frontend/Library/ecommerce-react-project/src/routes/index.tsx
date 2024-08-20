import { Outlet, useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { UseStateHook } from "../hooks/UseStateHook";
import { UseEffectHook } from "../hooks/UseEffectHook";
import { Register } from "../pages/Register";


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
    ,
    {
    path:'hook',
    element:<>
    <UseStateHook/>
    <UseEffectHook/>
    </>
    },
    {
    path:'Register',
    element:<Register/>
    }
]
}

function Allroutes(){
    return useRoutes([allpages])
}
export default Allroutes