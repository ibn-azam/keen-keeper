import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='bg-[#F8FAFC] min-h-screen'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;