import Image from 'next/image';
import styles from './footer.module.scss';
import logoBlack from '/public/rebuild/footer.png';
import logo from '/public/rebuild/footer-color.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import clsx from 'clsx';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <div className={styles.iconContainer}>
          <Link
            href="https://www.instagram.com/midnightcookie.to/"
            className={styles.icon}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className={clsx(styles.icon, styles.insta)}
              size="2x"
            />
          </Link>
          <Link
            href="https://www.facebook.com/midnightcookie.to/"
            className={styles.icon}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className={clsx(styles.icon, styles.fbook)}
              size="xl"
            />
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/about-us">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
        </div>
      </div>
      <div className={styles.subTextContainer}>
        <p>Copyright &#9400; 2024 Midnight Cookie. All Rights Reserved</p>
      </div>
      <div className={styles.images}>
        <Image
          src={logoBlack}
          className={styles.image}
          alt="Midnight Cookie Logo"
        />
        <Image
          src={logo}
          className={clsx(styles.image, styles.colorImage)}
          alt="Midnight Cookie Logo"
        />
        <Image
          src={logoBlack}
          className={styles.image}
          alt="Midnight Cookie Logo"
        />
        <Image
          src={logoBlack}
          className={styles.image}
          alt="Midnight Cookie Logo"
        />
        <Image
          src={logoBlack}
          className={styles.image}
          alt="Midnight Cookie Logo"
        />
        <Image
          src={logoBlack}
          className={styles.image}
          alt="Midnight Cookie Logo"
        />
      </div>
      <div className={styles.orryContainer}>
        <p>
          Website Development by{' '}
          <Link href="https://orrymevorach.com/" target="_blank">
            Orry Mevorach
          </Link>
        </p>
      </div>
    </footer>
  );
}
