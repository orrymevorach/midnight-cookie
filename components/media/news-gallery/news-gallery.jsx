import styles from './news-gallery.module.scss';
import { htmlRegex, formatDate } from '@utils';

export default function NewsGallery({ newsArticles }) {
  return (
    <div className={styles.tileGallery}>
      {newsArticles.map(({ content, date, featuredImage, title, uri }) => {
        const formattedDate = formatDate({ date });
        return (
          <div className={styles.tile} key={title}>
            <a href={uri} target="_blank">
              <img src={featuredImage.node.mediaItemUrl} alt="" />
            </a>
            <div className={styles.textContainer}>
              <p className={styles.date}>{formattedDate}</p>
              <p className={styles.title}>{title.replace(htmlRegex, '')}</p>
              <p className={styles.content}>{content.replace(htmlRegex, '')}</p>
              <a href={uri} className={styles.button} target="_blank">
                Read more
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
