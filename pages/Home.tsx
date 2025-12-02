import React from 'react';
import Hero from '../components/Hero';
import ComparisonSection from '../components/ComparisonSection';
import Features from '../components/Features';
import SocialProof from '../components/SocialProof';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import TrustLayer from '../components/TrustLayer';
import MarketTicker from '../components/MarketTicker';
import RevenueCalculator from '../components/RevenueCalculator';
import Ecosystem from '../components/Ecosystem';
import TrustSignals from '../components/TrustSignals';
import Solutions from '../components/Solutions';
import ProblemSolution from '../components/ProblemSolution';
import GlobalScale from '../components/GlobalScale';
import BusinessTypes from '../components/BusinessTypes';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <SocialProof />
            <ProblemSolution />
            <ComparisonSection />
            <GlobalScale />
            <BusinessTypes />
            <TrustLayer />
            <MarketTicker />
            <Ecosystem />
            <Solutions />
            <HowItWorks />
            <WhyChooseUs />
            <Features />
            <RevenueCalculator />
            <TrustSignals />
        </>
    );
};

export default Home;
