import React from 'react';
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import ProjectPage from '../pages/ProjectPage';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage';
import ProjectListPage from '../pages/ProjectListPage'


const Page = () => {
    return (
        <Routes>
            <Route path="/" exact={true} element={<HomePage />} />
            <Route path="/project" element={<ProjectListPage />} />
            <Route path="/project/:name" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPage />} />


        </Routes>

    );
}

export default Page;