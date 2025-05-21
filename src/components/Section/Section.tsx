import styles from './Section.module.css';

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps) => (
  <section className={styles.section}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section; 