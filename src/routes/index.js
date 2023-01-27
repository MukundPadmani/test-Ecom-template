import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import ManCollection from '../pages/ManCollection';

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/man-collection" element={<ManCollection />} exact />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    )
}

export default AllRoutes;