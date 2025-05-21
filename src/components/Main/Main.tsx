import styles from './Main.module.css';

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => (
  <main className={styles.main}>{children}</main>
);

export default Main; 