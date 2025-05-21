import styles from './Card.module.css';

type CardProps = {
  title: string;
  text: string;
  image?: string;
};

const Card = ({ title, text, image }: CardProps) => (
  <div className={styles.feature}>
    <hr className={styles.thickLine} />
    {image && <img src={image} alt={title} className={styles.featureImg} />}
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

export default Card; 