import styles from './news-banner.module.scss';
import Heading from '@components/heading';
import Image from 'next/image';

export default function NewsBanner() {
  return (
    <div>
      <Heading text="As Seen On" />
      <div className={styles.row}>
        <Image
          src="https://www.midnightcookie.ca/wp-content/uploads/2021/12/blogto.png"
          width={200}
          height={200}
        />
        <Image
          src="https://www.midnightcookie.ca/wp-content/uploads/2022/12/tastetoronto.jpeg"
          width={200}
          height={200}
        />
        <Image
          src="https://www.midnightcookie.ca/wp-content/uploads/2022/12/star.png"
          width={200}
          height={200}
        />
      </div>
      <div className={styles.row}>
        <Image
          src="https://www.midnightcookie.ca/wp-content/uploads/2021/08/daily-hive.jpeg"
          width={200}
          height={200}
        />
        <Image
          src="https://www.midnightcookie.ca/wp-content/uploads/2022/12/streets.png"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
