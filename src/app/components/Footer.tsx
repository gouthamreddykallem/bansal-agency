import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Jagdeep Singh Insurance Agency, Inc. All rights reserved.</p>
          <div>
            <a href="#" className="text-white hover:text-gray-300 mr-4">Privacy Policy</a>
            <a href="#" className="text-white hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;