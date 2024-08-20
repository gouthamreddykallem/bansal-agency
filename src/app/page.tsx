
"use client";

import React from 'react';
import { NextPage } from 'next';
import MainLayout from '../app/layouts/MainLayout';
import HeroSection from './components/hero/Hero';
import AboutSection from './components/about/AboutSection';
import InsuranceCategoriesSection from './components/insuranceCategories/InsuranceCategories';
import ReviewsSection from './components/reviews/ReviewsSection';
import Head from 'next/head';

const Home: NextPage = () => {
  return (

    <div>
      <Head>
        {/* <title>Meta Tag Example</title> */}
        {/* <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" /> */}

        <meta
          name="Bansal Insurance Agency"
          content="Bansal Insurance Agency"
          key="desc"
        />

      </Head>
      <MainLayout>
        <HeroSection />
        {/* <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <p>Here you can list your main services or add any other content for the homepage.</p>
      </div> */}
        <AboutSection />
        <InsuranceCategoriesSection />
        <ReviewsSection />
      </MainLayout>
    </div>
  );
};

export default Home;