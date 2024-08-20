import React from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';
import styles from './AboutSection.module.scss';

const AboutSection = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>Learn About Bansal Insurance Agency</h2>
          <p className={styles.address}>3735 W SHAW AVE. FRESNO, CA 93711</p>
          
          <div className={styles.featureGrid}>
            <div className={`${styles.featureCard} ${styles.brown}`}>
              <Check className={styles.icon} />
              <p>We offer a wide variety of insurance solutions.</p>
            </div>
            <div className={`${styles.featureCard} ${styles.white}`}>
              <Check className={styles.icon} />
              <p>We are there for you in your time of need.</p>
            </div>
            <div className={`${styles.featureCard} ${styles.white}`}>
              <Check className={styles.icon} />
              <p>We are by your side every step of the way.</p>
            </div>
            <div className={`${styles.featureCard} ${styles.blue}`}>
              <Check className={styles.icon} />
              <p>We are licensed insurance advisors.</p>
            </div>
          </div>
        </div>
        
        <div className={styles.rightColumn}>
          <div className={styles.description}>
            <p>
              As a trucker or business owner, you already have so much to worry about in your busy schedule—insurance shouldnt be one of them. We are an independent insurance agency focused on helping make your life easier. With an assortment of coverage solutions, we can help you find trucking insurance to meet your needs. We also offer coverage for your home, personal vehicle, and more so we can be your one-stop shop for insurance.
            </p>
            <p>
              You get more than just insurance coverage at Bansal Insurance Agency. We are an independent insurance agency, which means you get the power of choice. By working with several top-rated insurance carriers, we can offer you a variety of options when it comes to your protection. Coupled with our knowledgeable and dedicated customer service, were here for you so you can stay focused on the road ahead.
            </p>
          </div>
          
          <div className={styles.actionButtons}>
            <Link href="/why-independent" className={`${styles.button} ${styles.outlineButton}`}>
              Why Go Independent?
            </Link>
            <Link href="/about-us" className={`${styles.button} ${styles.filledButton}`}>
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;