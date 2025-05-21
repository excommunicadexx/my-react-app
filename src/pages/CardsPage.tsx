import CardList from '../components/CardList/CardList';
import { useSearchParams } from 'react-router-dom';

const CardsPage = () => {
  const [searchParams] = useSearchParams();
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  return (
    <div>
      <h2>Все карточки</h2>
      <CardList limit={limit} />
    </div>
  );
};

export default CardsPage; 