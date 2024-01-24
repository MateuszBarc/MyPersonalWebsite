import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "../styles/Footer.css"


const StartInfo = () => {
    return (
        <p>Jesteś na <span>Stronie Głównej</span></p>
    );
}
const ProjectInfo = () => {
    return (
        <p>Jesteś na <span>Stronie Projektów</span></p>
    );
}
const ContactInfo = () => {
    return (
        <p>Jesteś na <span>Stronie Kontaktu</span></p>
    );
}
const AdminInfo = () => {
    return (
        <p>Jesteś na <span>Stronie Administratora</span></p>
    );
}


const Footer = () => {
    return (
        <div>
            <h2>Stopka</h2>
            <Routes>
                <Route path="/" exact element={<StartInfo />} />
                <Route path="/project" element={<ProjectInfo />} />
                <Route path="/contact" element={<ContactInfo />} />
                <Route path="/admin" element={<AdminInfo />} />
            </Routes>
        </div>
    );
}

export default Footer;
