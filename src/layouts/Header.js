import React from 'react';
import { Route, Routes } from 'react-router-dom'
import "../styles/Header.css"
import header1 from '../images/HeaderHome.png'
import header2 from '../images/HeaderKontakt.png'
import header3 from '../images/HeaderProjekt.png'



const Header = () => {

    return (
        <>

            <Routes>
                <Route path="/" element={<img src={header1} />} />
                <Route path="/project" element={<img src={header3} />} />
                <Route path="/contact" element={<img src={header2} />} />
                <Route path="/admin" element={<img src={header1} />} />
                <Route path="/project/:name" element={<img src={header3} />} />


            </Routes>

        </>
    );
}

export default Header;