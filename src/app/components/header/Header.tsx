// ./src/app/components/header/Header.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import { Search, Menu, X, Truck, Car, Briefcase, Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const InsuranceDropdown = () => (
    <div className={styles.dropdown}>
      <div className={styles.dropdownContent}>
        <div className={styles.dropdownColumn}>
          <Truck size={24} className={styles.icon} />
          <h3>Insurance by Industry</h3>
          <ul>
            <li><Link href="/insurance/industry/trucking">Trucking</Link></li>
            <li><Link href="/insurance/industry/contractor">Contractor</Link></li>
            <li><Link href="/insurance/industry/farm">Farm</Link></li>
            <li><Link href="/insurance/industry" className={styles.seeAll}>See All</Link></li>
          </ul>
        </div>
        <div className={styles.dropdownColumn}>
          <Car size={24} className={styles.icon} />
          <h3>Personal Insurance</h3>
          <ul>
            <li><Link href="/insurance/personal/auto">Auto</Link></li>
            <li><Link href="/insurance/personal/home">Home</Link></li>
            <li><Link href="/insurance/personal/life">Individual Life</Link></li>
            <li><Link href="/insurance/personal" className={styles.seeAll}>See All</Link></li>
          </ul>
        </div>
        <div className={styles.dropdownColumn}>
          <Briefcase size={24} className={styles.icon} />
          <h3>Business Insurance</h3>
          <ul>
            <li><Link href="/insurance/business/auto">Business Auto</Link></li>
            <li><Link href="/insurance/business/owners">Business Owners</Link></li>
            <li><Link href="/insurance/business/liability">General Liability</Link></li>
            <li><Link href="/insurance/business" className={styles.seeAll}>See All</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );

  const MobileMenu = () => (
    <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
      <button className={styles.closeButton} onClick={toggleMenu}>
        <X size={24} />
      </button>
      <nav>
        <ul className={styles.mobileNavList}>
          <li>
            <span>Insurance Solutions</span>
            <InsuranceDropdown />
          </li>
          <li><Link href="/service-center" onClick={toggleMenu}>Service Center</Link></li>
          <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
      <div className={styles.mobileContact}>
        <span className={styles.phoneNumber}>559-277-5580</span>
        <button className={styles.quoteButton}>Request Quote</button>
      </div>
    </div>
  );

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {isMobile ? (
          <>
            <div className={styles.mobileHeader}>
              <button className={styles.searchButton} aria-label="Search">
                <Search size={20} />
              </button>
              <Link href="/" className={styles.logoLink}>
                <Image 
                  src="/logo.png"
                  alt="Jagdeep Singh Insurance Agency, Inc." 
                  width={180} 
                  height={48} 
                  className={styles.logoImage}
                />
              </Link>
              <button className={styles.menuButton} onClick={toggleMenu}>
                Menu <Menu size={20} />
              </button>
            </div>
            <MobileMenu />
          </>
        ) : (
          <>
            <div className={styles.leftSection}>
              <Link href="/" className={styles.logoLink}>
                <Image 
                  src="/logo.png"
                  alt="Jagdeep Singh Insurance Agency, Inc." 
                  width={240} 
                  height={60} 
                  className={styles.logoImage}
                />
              </Link>
              <nav className={styles.nav}>
                <ul className={styles.navList}>
                  <li className={styles.hasDropdown}>
                    <Link href="/insurance-solutions" className={styles.navLink}>Insurance Solutions</Link>
                    <InsuranceDropdown />
                  </li>
                  <li><Link href="/service-center" className={styles.navLink}>Service Center</Link></li>
                  <li><Link href="/about" className={styles.navLink}>About</Link></li>
                  <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
                </ul>
              </nav>
            </div>
            <div className={styles.rightSection}>
              <span className={styles.phoneNumber}>559-277-5580</span>
              <button className={styles.quoteButton}>Request Quote</button>
              <button className={styles.searchButton} aria-label="Search">
                <Search size={20} />
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;