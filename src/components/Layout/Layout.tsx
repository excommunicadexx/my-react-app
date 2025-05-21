import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import Modal from '../Modal/Modal';
import styles from './Layout.module.css';

type LayoutProps = {
  children: React.ReactNode;
  showPreloader?: boolean;
  showSignUp?: boolean;
  showLogin?: boolean;
  onCloseSignUp?: () => void;
  onCloseLogin?: () => void;
  signUpForm?: React.ReactNode;
  loginForm?: React.ReactNode;
  onSignUp?: () => void;
  onLogin?: () => void;
};

const Layout = ({ children, showPreloader, showSignUp, showLogin, onCloseSignUp, onCloseLogin, signUpForm, loginForm, onSignUp, onLogin }: LayoutProps) => (
  <div className={styles.layout}>
    {showPreloader && <Preloader />}
    <Header onSignUp={onSignUp || (() => {})} onLogin={onLogin || (() => {})} />
    <main className={styles.main}>{children}</main>
    <Footer />
    <Modal isOpen={!!showSignUp} onClose={onCloseSignUp || (() => {})}>
      {signUpForm || null}
    </Modal>
    <Modal isOpen={!!showLogin} onClose={onCloseLogin || (() => {})}>
      {loginForm || null}
    </Modal>
  </div>
);

export default Layout; 