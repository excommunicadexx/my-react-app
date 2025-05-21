import CardList from '../components/CardList/CardList';
import SliderSection from '../components/SliderSection/SliderSection';
import { Link } from 'react-router-dom';

const HomePage = () => (
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
    <SliderSection />
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
        <h2>
          <Link to="/cards" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            Карточки
          </Link>
        </h2>
        <h1>Everything you want to know in one place.</h1>
        <img id="infoImage" src="/img/professional-profile.png" alt="Info Image" className="info-image" />
        <CardList limit={3} />
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
    {/* CTA Section (размер внизу перед футером) */}
    <section className="cta" style={{ backgroundColor: '#000', color: '#fff', padding: '60px 0', marginTop: '40px' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="text-container" style={{ maxWidth: '400px' }}>
          <h1 style={{ fontSize: '40px', marginBottom: '10px' }}>Set up your profile.<br />Let jobs find you.</h1>
          <button className="cta-button" style={{ backgroundColor: '#3D1EDD', color: '#fff', padding: '10px 20px', border: 'none', cursor: 'pointer', marginTop: '20px' }}>Join Now</button>
        </div>
        <img src="/img/job-image.png" alt="Job Image" className="cta-image" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
    </section>
  </main>
);

export default HomePage; 