import styles from './news-gallery.module.scss';
import Article from './news-article';

export default function NewsGallery({ newsArticles = [] }) {
  return (
    <div className={styles.tileGallery}>
      {Array.from(newsArticles)
        .sort((a, b) => {
          if (a.date < b.date) return +1;
          else return -1;
        })
        .map(articleData => (
          <Article {...articleData} />
        ))}
    </div>
  );
}
