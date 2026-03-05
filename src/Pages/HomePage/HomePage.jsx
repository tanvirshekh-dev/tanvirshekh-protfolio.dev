import React from 'react';
import Home from '../../Components/Home/Home';
import About from '../About/About';

const HomePage = () => {
    return (
        <div>
            {/* Home section */}
            <Home></Home>
            {/* About section */}
            <About></About>
        </div>
    );
};

export default HomePage;