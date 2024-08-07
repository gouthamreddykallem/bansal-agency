import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './InsuranceCategoriesSection.module.scss';

const InsuranceCategoriesSection = () => {
  const categories = [
    {
      title: 'Industries',
      image: '/industries.jpg',
      link: '/insurance/industries'
    },
    {
      title: 'Personal',
      image: '/personal.jpg',
      link: '/insurance/personal'
    },
    {
      title: 'Business',
      image: '/business.jpg',
      link: '/insurance/business'
    }
  ];

  return (
    <>
    <section className={styles.insuranceCategoriesSection}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>Secure Your Business and Yourself</h2>
        <p className={styles.description}>
          Bansal Insurance Agency offers a variety of insurance by industry, personal insurance and business
          insurance solutions to help you protect what matters most.
        </p>
      </div>
      <div className={styles.imageGrid}>
        {categories.map((category, index) => (
          <Link href={category.link} key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={category.image}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{category.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
    <div className={styles.whiteSpacing}></div>
    </>
  );
};

export default InsuranceCategoriesSection;