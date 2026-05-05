import React, { Suspense, useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import Friends from '../../components/Friends/Friends';

const HomePage = ({friendsPromise}) => {

    useEffect(() => { document.title = 'Home | KeenKeeper'; }, []);
     
    return (
        <div className=''>
            <Hero/>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                <Friends friendsPromise={friendsPromise}/>
            </Suspense>
        </div>
    );
};

export default HomePage;