import React from 'react';
import { NextPage } from 'next';
import MainLayout from '../app/layouts/MainLayout';
import Hero from '../app/components/Hero';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <p>Here you can list your main services or add any other content for the homepage.</p>
      </div>
    </MainLayout>
  );
};

export default Home;