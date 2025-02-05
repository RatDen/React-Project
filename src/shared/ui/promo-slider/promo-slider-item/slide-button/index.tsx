import styles from './styles.module.css';

type SlideButtonProps = {
  text: string;
};

export const SlideButton = ({ text }: SlideButtonProps) => (
  <div className={styles.link}>{text}</div>
);
