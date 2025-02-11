import styles from './styles.module.css';

export function ActionWatch() {
  return (
    <div className={styles.buySubscription}>
      <span className={styles.buySubscription_primaryText}>Смотреть </span>
      <span className={styles.buySubscription_secondaryText}>
        по подписке Иви
      </span>
    </div>
  );
}
