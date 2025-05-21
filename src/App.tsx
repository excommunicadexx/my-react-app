import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './assets/styles/global.css';

const sliderImages = [
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
];

function App() {
  // Слайдер
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<number | null>(null);

  useEffect(() => {
    slideInterval.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, []);

  // Комментарии (features)
  const [features, setFeatures] = useState<{card_name: string, card_text: string}[]>([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')
      .then(res => res.json())
      .then(json => {
        setFeatures(json.map((comment: any) => ({
          card_name: `Комментарий от ${comment.name}`,
          card_text: comment.body
        })));
      });
  }, []);

  // Модальные окна
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Header onSignUp={() => setShowSignUp(true)} onLogin={() => setShowLogin(true)} />
      {/* Sign Up Modal */}
      {showSignUp && (
        <div className="modal" onClick={e => { if (e.target === e.currentTarget) setShowSignUp(false); }}>
          <div className="modal-content">
            <span className="close" onClick={() => setShowSignUp(false)}>&times;</span>
            <h2>Регистрация</h2>
            <form id="signupForm" onSubmit={e => { e.preventDefault(); alert('Регистрация успешно выполнена!'); setShowSignUp(false); }}>
              <label htmlFor="username">Имя пользователя:</label>
              <input type="text" id="username" name="username" required />
              <label htmlFor="email">Электронная почта:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="password">Пароль:</label>
              <input type="password" id="password" name="password" required />
              <button className="buttonokno" type="submit">Зарегистрироваться</button>
            </form>
          </div>
        </div>
      )}
      {/* Login Modal */}
      {showLogin && (
        <div className="modal" onClick={e => { if (e.target === e.currentTarget) setShowLogin(false); }}>
          <div className="modal-content">
            <span className="close" onClick={() => setShowLogin(false)}>&times;</span>
            <h2>Вход</h2>
            <form id="loginForm" onSubmit={e => { e.preventDefault(); alert('Вход выполнен успешно!'); setShowLogin(false); }}>
              <label htmlFor="loginUsername">Имя пользователя:</label>
              <input type="text" id="loginUsername" name="loginUsername" required />
              <label htmlFor="loginPassword">Пароль:</label>
              <input type="password" id="loginPassword" name="loginPassword" required />
              <button className="buttonokno" type="submit">Войти</button>
            </form>
          </div>
        </div>
      )}
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h1>Candidates with Creative & <br /> Engineering Backgrounds</h1>
            <h4>This is the place to show yourself and land entry level jobs at cutting-edge companies. <br /> Launch your career here.</h4>
            <button className="buttonjoin">Join Now</button>
            <p>Looking for candidate's? Hire now</p>
          </div>
        </section>
        {/* Slider Section */}
        <section className="bloktem">
          <div className="slider">
            {sliderImages.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`Image ${idx + 1}`}
                className={`hero-image${idx === currentSlide ? ' active' : ''}`}
              />
            ))}
          </div>
        </section>
        {/* Quote Section */}
        <section className="quote">
          <div className="container">
            <div className="images">
              <img src="/img/mask.png" alt="mas" className="img_dop1" />
              <img src="/img/avatar.png" alt="" className="img_dop2" />
            </div>
            <blockquote>
              <h1>Creating an Online Presence is Hard.<br />Jobly Makes it Easy for Recruiters to See you</h1>
              <div className="author">
                <h4>Zhao Cui</h4>
                <p>Founder at Jobly.co</p>
              </div>
            </blockquote>
          </div>
        </section>
        {/* Info Section */}
        <section className="info">
          <div className="container">
            <h1>Everything you want to know in one place.</h1>
            <img id="infoImage" src="/img/professional-profile.png" alt="Info Image" className="info-image" />
            <div className="features" id="features-container">
              {features.map((f, idx) => (
                <div className="feature" key={idx}>
                  <hr className="thick-line" />
                  <h3>{f.card_name}</h3>
                  <p>{f.card_text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Connect Section */}
        <section className="connect">
          <div className="container">
            <img src="/img/connect-image.png" alt="Connect with Recruiter" className="connect-image" />
            <div className="connect-text">
              <h1>Connect With Recruiter</h1>
              <p>Get instant access to a curated pool of top creative & tech talent actively seeking their next role. Find highly qualified job!</p>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="cta">
          <div className="container">
            <div className="text-container">
              <h1>Set up your profile.<br />Let jobs find you.</h1>
              <button className="cta-button">Join Now</button>
            </div>
            <img src="/img/job-image.png" alt="Job Image" className="cta-image" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
