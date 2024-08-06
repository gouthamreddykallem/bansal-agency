
"use client";

import React from 'react';
import { NextPage } from 'next';
import MainLayout from '../app/layouts/MainLayout';
import HeroSection from './components/hero/Hero';
import AboutSection from './components/about/AboutSection';
import InsuranceCategoriesSection from './components/insuranceCategories/InsuranceCategories';
import ReviewsSection from './components/reviews/ReviewsSection';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HeroSection />
      {/* <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <p>Here you can list your main services or add any other content for the homepage.</p>
      </div> */}
      <AboutSection/>
      <InsuranceCategoriesSection/>
      <ReviewsSection />
    </MainLayout>
  );
};

export default Home;