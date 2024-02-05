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
            />
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/about-us">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
        </div>
      </div>
      <p className={styles.copyrightText}>
        Copyright &#9400; 2022 Midnight Cookie. All Rights Reserved
      </p>
      <div className={styles.images}>
        <Image src={logoBlack} className={styles.image} alt="" />
        <Image
          src={logo}
          className={clsx(styles.image, styles.colorImage)}
          alt=""
        />
        <Image src={logoBlack} className={styles.image} alt="" />
        <Image src={logoBlack} className={styles.image} alt="" />
        <Image src={logoBlack} className={styles.image} alt="" />
        <Image src={logoBlack} className={styles.image} alt="" />
      </div>
    </footer>
  );
}
