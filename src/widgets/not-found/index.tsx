import styles from './styles.module.css';

export function NotFoundInfo() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.title}>Ошибка</div>
        <div className={styles.subtitle}>
          Запрашиваемой страницы не существует
        </div>
      </div>
    </div>
  );
}
