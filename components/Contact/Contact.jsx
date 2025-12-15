import Form from './Form/Form';
import styles from './Contact.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import cookies from 'public/rebuild/three-cookies.png';

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Form />
      </div>
      <div className={clsx(styles.right)}>
        <Image src={cookies} quality={70} />
      </div>
    </div>
  );
}
