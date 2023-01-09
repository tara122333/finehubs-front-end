import React from "react";
import Navbar from "../components/Navbar/Navbar";

const DefaultLayout = (props) =>{
    return(
        <>
            <div className='shadow-lg mb-5'>
                <Navbar />
            </div>
            {
                props.children
            }
        </>
    );
}
export default DefaultLayout;