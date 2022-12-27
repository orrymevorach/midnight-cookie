import styles from './news-gallery.module.scss';
import { htmlRegex, formatDate } from '@utils';

export default function NewsGallery({ newsArticles = [] }) {
  return (
    <div className={styles.tileGallery}>
      {Array.from(newsArticles)
        .sort((a, b) => {
          if (a.date < b.date) return +1;
          else return -1;
        })
        .map(({ url, content: { json }, date, image, title }) => {
          const formattedDate = formatDate({ date });
          const textContent = json.content[0].content[0].value;
          return (
            <div className={styles.tile} key={title}>
              <a href={url} target="_blank">
                <img src={image.url} alt="" />
              </a>
              <div className={styles.textContainer}>
                <p className={styles.date}>{formattedDate}</p>
                <p className={styles.title}>{title.replace(htmlRegex, '')}</p>
                <p className={styles.content}>
                  {textContent.replace(htmlRegex, '')}
                </p>
                <a href={url} className={styles.button} target="_blank">
                  Read more
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
}
