import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, Search, Users, Info } from 'lucide-react';
import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/truck.jpg"
            alt="on mountain road"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Your One Stop Shop</h1>
          <p className={styles.heroSubtitle}>
            Bansal Insurance Agency has provided insurance services since 2004.
          </p>
          <div className={styles.heroButtons}>
            <button className={`${styles.heroButton} ${styles.primary}`}>Connect With Us</button>
            <button className={`${styles.heroButton} ${styles.secondary}`}>Request a Quote</button>
          </div>
        </div>
      </div>
      <div className={styles.infoCardsContainer}>
        <Link href="/trucking-insurance" className={styles.infoCard}>
          <Truck className={styles.infoIcon} />
          <h3>Get on the road.</h3>
          <p>Find trucking insurance.</p>
        </Link>
        <Link href="/insurance-solutions" className={styles.infoCard}>
          <Search className={styles.infoIcon} />
          <h3>Looking for other coverage?</h3>
          <p>Explore insurance solutions.</p>
        </Link>
        <Link href="/contact-us" className={styles.infoCard}>
          <Users className={styles.infoIcon} />
          <h3>Need help?</h3>
          <p>Contact one of our agents.</p>
        </Link>
        <Link href="/service-center" className={styles.infoCard}>
          <Info className={styles.infoIcon} />
          <h3>Already a client?</h3>
          <p>Visit our Service Center.</p>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;