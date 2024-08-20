import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ReviewsSection.module.scss';

interface Review {
  id: number;
  text: string;
  author: string;
}

const reviews: Review[] = [
  {
    id: 1,
    text: "Great place for truck insurance, always on top of things, can't ask for more. Been with them for years and will continue as long as I'm still trucking.",
    author: "Seng Y."
  },
  {
    id: 2,
    text: "Exceptional service and competitive rates. They really understand the needs of truckers.",
    author: "Mike R."
  },
  {
    id: 3,
    text: "Bansal Insurance Agency has been a lifesaver for my business. Their expertise is unmatched.",
    author: "Linda S."
  }
];

const ReviewsSection: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <>
    <section className={styles.reviewsSection}>
      <div className={styles.backgroundImage}>
        <Image
          src="/reviews_bg2.jpg"
          alt="on the road"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.ratingIcon}>
          <Image
            src="/five_star.jpg"
            alt="Five star rating"
            width={100}
            height={20}
          />
        </div>
        <h2 className={styles.title}>Our Clients Rave About Us</h2>
        <p className={styles.subtitle}>
          Check out our reviews and see why you should switch to Bansal Insurance Agency.
        </p>
        <div className={styles.reviewCarousel}>
          <button className={styles.arrowButton} onClick={prevReview}>
            <ChevronLeft />
          </button>
          <div className={styles.review}>
            <p className={styles.reviewText}>{reviews[currentReview].text}</p>
            <p className={styles.reviewAuthor}>{reviews[currentReview].author}</p>
          </div>
          <button className={styles.arrowButton} onClick={nextReview}>
            <ChevronRight />
          </button>
        </div>
        <div className={styles.indicators}>
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`${styles.indicator} ${index === currentReview ? styles.active : ''}`}
              onClick={() => setCurrentReview(index)}
            />
          ))}
        </div>
        <div className={styles.buttons}>
          <button className={styles.button}>Read More Reviews</button>
          <button className={styles.button}>Read Google Reviews</button>
        </div>
      </div>
    </section>
    <div className={styles.whiteSpacing}></div>
    </>
  );
};

export default ReviewsSection;