import styles from './Header.module.css';

type HeaderProps = {
  onSignUp?: () => void;
  onLogin?: () => void;
};

const Header = ({ onSignUp, onLogin }: HeaderProps) => (
  <header className={styles.header}>
    <div className="container">
      <div className="logo"><h4>Jobly</h4></div>
      <nav>
        <a href="#" className="for-recruiters">For Recruiters</a>
        <a href="#" className="buttonjoin" id="signUpBtn" onClick={e => { e.preventDefault(); onSignUp && onSignUp(); }}>Sign Up</a>
        <a href="#" className="log-in" onClick={e => { e.preventDefault(); onLogin && onLogin(); }}>Log In</a>
      </nav>
    </div>
  </header>
);

export default Header; 