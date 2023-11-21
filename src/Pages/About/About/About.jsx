import React from 'react';
import Banner from '../Banner/Banner';
import Abouts from '../../../Component/Abouts/Abouts';
import Testimonial from '../../../Component/Testimonial/Testimonial';
import Team from '../../../Component/Team/Team';


const About = () => {
    return (
        <div>
            <Banner/>
            <Abouts/>
            <Testimonial/>
            <Team/>
        </div>
    );
};

export default About;