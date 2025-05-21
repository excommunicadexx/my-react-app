import { useState } from 'react';
import styles from './SliderSection.module.css';

const images = [
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
];

const SliderSection = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section className={styles.bloktem}>
      <div className={styles.slider}>
        <button className={styles.navBtn} onClick={prevSlide} aria-label="Previous">&#8592;</button>
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`Image ${idx + 1}`}
            className={styles.heroImage + ' ' + (idx === current ? styles.active : '')}
            style={{ display: idx === current ? 'block' : 'none' }}
          />
        ))}
        <button className={styles.navBtn} onClick={nextSlide} aria-label="Next">&#8594;</button>
      </div>
    </section>
  );
};

export default SliderSection; 