import React from 'react';
import Hero from '../../components/Hero/Hero';
import Friends from '../../components/Friends/Friends';

const HomePage = ({friendsPromise}) => {
     
    return (
        <div className=''>
            <Hero/>
            <Friends friendsPromise={friendsPromise}/>
        </div>
    );
};

export default HomePage;