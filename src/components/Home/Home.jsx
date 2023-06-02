import React from 'react';

import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/Navbar';

const Home = () => {
    return (
        <div className='container'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;