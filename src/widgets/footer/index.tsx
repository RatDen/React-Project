import styles from './styles.module.css';
import clsx from 'clsx';
import { Info } from './info';
import { More } from './more';

{
  /* TODO: Реализовать ссылки*/
}

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div
        className={clsx(styles.footer__content, styles.footer__content_border)}
      >
        <Info />
      </div>
      <div className={styles.footer__content}>
        <More />
      </div>
    </footer>
  );
};
