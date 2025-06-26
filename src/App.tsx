import Layout from './components/Layout/Layout';
import CardList from './components/CardList/CardList';
import SliderSection from './components/SliderSection/SliderSection';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CardsPage from './pages/CardsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="cards" element={<CardsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
