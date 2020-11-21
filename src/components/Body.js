import React from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Main from '../components/Main';


function Body () {
    return(
        <div id="wrapper">
            <Sidebar/>
            <div id="content-wrapper" className="d-flex flex-column">


            <div id="content">
            <Topbar />
            <Main/>
            <Footer/>
            </div>
            </div>
            
        </div> 


    );
};


export default Body;