import React from 'react';
import './layout.scss'
import ScrollTop from "../scrolltop/Scroll";
import Navbar from "components/navbar/navbar";
import Footer from "components/footer/footer";

function Layout({children}) {
    return (
        <div className='main__wrapper'>
            <ScrollTop/>
            <Navbar/>
            <section>{children}</section>
            <Footer/>
        </div>);
}

export default Layout;