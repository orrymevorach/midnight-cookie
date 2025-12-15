import styles from './logo-row.module.scss';
import Image from 'next/image';
import logoBlack from 'public/rebuild/footer.png';

export default function LogoRow() {
  return (
    <div className={styles.images}>
      <Image src={logoBlack} className={styles.image} />
      <Image src={logoBlack} className={styles.image} />
      <Image src={logoBlack} className={styles.image} />
      <Image src={logoBlack} className={styles.image} />
      <Image src={logoBlack} className={styles.image} />
      <Image src={logoBlack} className={styles.image} />
    </div>
  );
}
