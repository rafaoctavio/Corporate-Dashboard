import React from 'react';

import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Main from '../components/Main';


function Body () {
    return(
        <div id="wrapper">
            <Sidebar/>
            <Topbar />
            <Main/>
            <Footer/>
        </div> 


    );
};


export default Body;