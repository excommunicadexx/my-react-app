import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './CardList.module.css';

interface CardData {
  id: number;
  title: string;
  body: string;
}

interface CardListProps {
  limit?: number;
}

const CardList = ({ limit = 3 }: CardListProps) => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then(response => {
        if (!response.ok) throw new Error('Ошибка загрузки данных');
        return response.json();
      })
      .then(data => {
        setCards(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [limit]);

  if (loading) return <div className={styles.status}>Загрузка...</div>;
  if (error) return <div className={styles.status}>Ошибка: {error}</div>;

  return (
    <div className={styles.features}>
      {cards.map((card: CardData) => (
        <Card key={card.id} title={card.title} text={card.body} />
      ))}
    </div>
  );
};

export default CardList; 