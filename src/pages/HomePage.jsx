import React from 'react';
import Header from '../components/Home/Header';
import HeaderBottom from '../components/Home/HeaderBottom';
import Colleges from '../components/Home/Colleges';
import CollegeImageGallery from '../components/Home/CollegeImageGallery';
import ResearchPaperSection from '../components/Home/ResearchPaperSection';
import ReviewSection from '../components/Home/ReviewSection';

const HomePage = () => {
    return (
        <div>
            <Header />
            <HeaderBottom />
            <Colleges />
            <CollegeImageGallery />
            <ResearchPaperSection />
            <ReviewSection collegeName="Sunshine University" />
        </div>
    );
};

export default HomePage;