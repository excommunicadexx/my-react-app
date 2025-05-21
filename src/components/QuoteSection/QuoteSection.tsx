import styles from './QuoteSection.module.css';

const QuoteSection = () => (
  <section className={styles.quote}>
    <div className="container">
      <div className={styles.images}>
        <img src="/img/mask.png" alt="mas" className={styles.imgDop1} />
        <img src="/img/avatar.png" alt="" className={styles.imgDop2} />
      </div>
      <blockquote>
        <h1>Creating an Online Presence is Hard.<br />Jobly Makes it Easy for Recruiters to See you</h1>
        <div className={styles.author}>
          <h4>Zhao Cui</h4>
          <p>Founder at Jobly.co</p>
        </div>
      </blockquote>
    </div>
  </section>
);

export default QuoteSection; 