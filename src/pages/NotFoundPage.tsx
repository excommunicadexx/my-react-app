import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div style={{ textAlign: 'center', marginTop: '60px' }}>
    <h1>404 — Страница не найдена</h1>
    <Link to="/" style={{ color: '#007BFF', textDecoration: 'underline', fontSize: '18px' }}>
      На главную
    </Link>
  </div>
);

export default NotFoundPage; 