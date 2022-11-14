import React from 'react';
import useTitle from '../../hooks/useTitle';

import Banner from './Banner';
import ExtraSec1 from './ExtraSec1';
import SecExt2 from './SecExt2';
import Services from './Services';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ExtraSec1></ExtraSec1>
            <SecExt2></SecExt2>
        </div>
    );
};

export default Home;