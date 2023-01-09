import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const DefaultLayout = (props) =>{
    return(
        <>
            <div className='shadow-lg mb-5'>
                <Navbar />
            </div>
            {
                props.children
            }
            <din className="">
                <Footer />
            </din>
        </>
    );
}
export default DefaultLayout;