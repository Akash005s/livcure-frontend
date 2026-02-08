import React from 'react';
import Hero from '../components/landing/Hero';
import HowItWorks from '../components/landing/HowItWorks';
import WhyChooseUs from '../components/landing/WhyChooseUs';
import ContactSection from '../components/landing/ContactSection';

const LandingPage: React.FC = () => {
    return (
        <div id="home">
            <Hero />
            <HowItWorks />
            <WhyChooseUs />
            <ContactSection />
        </div>
    );
};

export default LandingPage;
