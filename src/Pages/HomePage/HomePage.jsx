import React from 'react';
import Home from '../../Components/Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Services from '../Services/Services';

const HomePage = () => {
    return (
        <div>
            {/* Home section */}
            <Home></Home>
            {/* About section */}
            <About></About>
            {/* Skills section */}
            <Skills></Skills>
            {/* My services section */}
            <Services></Services>
        </div>
    );
};

export default HomePage;