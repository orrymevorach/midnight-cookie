import { htmlRegex, formatDate } from 'utils/utils';
import styles from './news-article.module.scss';
import RichText from 'components/shared/rich-text';
import { getMedia } from 'lib/contentful';

export default function Article({ url, content, date, image, title }) {
  const formattedDate = formatDate({ date });
  const imageData = getMedia(image);
  return (
    <div className={styles.tile} key={title}>
      <a href={url} target="_blank">
        <img src={imageData.src} alt={title.replace(htmlRegex, '')} />
      </a>
      <div className={styles.textContainer}>
        <p className={styles.date}>{formattedDate}</p>
        <p className={styles.title}>{title.replace(htmlRegex, '')}</p>
        <p className={styles.content}>
          <RichText json={content} />
        </p>
        <a href={url} className={styles.button} target="_blank">
          Read more
        </a>
      </div>
    </div>
  );
}
