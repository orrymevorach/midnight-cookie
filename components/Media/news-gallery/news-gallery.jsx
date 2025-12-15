import styles from './news-gallery.module.scss';
import Article from './news-article';
import { removeTime } from 'utils/utils';

export default function NewsGallery({ newsArticles = [] }) {
  return (
    <div className={styles.tileGallery}>
      {Array.from(newsArticles)
        .sort((a, b) => {
          const aDate = removeTime(a.date);
          const bDate = removeTime(b.date);
          if (aDate < bDate) return 1;
          else return -1;
        })
        .map(articleData => (
          <Article {...articleData} key={articleData.title} />
        ))}
    </div>
  );
}
