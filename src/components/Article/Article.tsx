import styles from './Article.module.css';

type ArticleProps = {
  title: string;
  content: string;
};

const Article = ({ title, content }: ArticleProps) => (
  <article className={styles.article}>
    <h3>{title}</h3>
    <p>{content}</p>
  </article>
);

export default Article; 