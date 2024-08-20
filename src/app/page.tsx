import React from 'react';
import { NextPage } from 'next';
import Hero from './components/hero/Hero';
import AboutSection from './components/about/AboutSection';
import InsuranceCategoriesSection from './components/insuranceCategories/InsuranceCategories';
import ReviewsSection from './components/reviews/ReviewsSection';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <AboutSection/>
      <InsuranceCategoriesSection/>
      <ReviewsSection/>
    </>
  );
};

export default Home;