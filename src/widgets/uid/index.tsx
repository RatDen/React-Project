import styles from './styles.module.css';

export const Uid = () => (
  <p className={styles.uid}>{`uid: ${Math.random()}`}</p>
);
