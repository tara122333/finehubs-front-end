import React from "react";
import { Route,Routes} from "react-router-dom";

import HomeLayout from '../Layout/Home.Layout';

const HomeHOC = ({element:Component,...rest})=>{
    const fun = (props) =>{
        return (<HomeLayout> <Component {...props} /> </HomeLayout>);
    }
    return(
        <>
            <Routes>
                <Route {...rest} element={fun(rest)}/>
            </Routes>
        </>
    );
}

export default HomeHOC;