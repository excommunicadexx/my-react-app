import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul>
      <li><a href="/">Главная</a></li>
      <li><a href="/about">О нас</a></li>
    </ul>
  </nav>
);

export default Navbar; 