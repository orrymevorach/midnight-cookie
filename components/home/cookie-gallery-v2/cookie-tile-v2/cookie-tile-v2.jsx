import styles from './cookie-tile-v2.module.scss';

export default function CookieTile({
  cookieData: {
    title,
    image: { url },
  },
}) {
  return (
    <div className={styles.container}>
      <div
        className={styles.cookieTile}
        style={{ backgroundImage: `url(${url})` }}
      ></div>
      <div>
        {title.split(' ').map((word, index) => (
          <p key={`${word}-${index}`} className={styles.title}>
            <span>{word}</span>
            <br />
          </p>
        ))}
      </div>
    </div>
  );
}
