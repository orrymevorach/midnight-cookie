import { htmlRegex, formatDate } from 'utils/utils';
import styles from './news-article.module.scss';

export default function Article({
  url,
  content: { json },
  date,
  image,
  title,
}) {
  const formattedDate = formatDate({ date });
  const textContent = json.content[0].content[0].value;
  return (
    <div className={styles.tile} key={title}>
      <a href={url} target="_blank">
        <img src={image.url} alt={title.replace(htmlRegex, '')} />
      </a>
      <div className={styles.textContainer}>
        <p className={styles.date}>{formattedDate}</p>
        <p className={styles.title}>{title.replace(htmlRegex, '')}</p>
        <p className={styles.content}>{textContent.replace(htmlRegex, '')}</p>
        <a href={url} className={styles.button} target="_blank">
          Read more
        </a>
      </div>
    </div>
  );
}
