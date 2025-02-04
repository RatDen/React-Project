import styles from './styles.module.css';
import { Link } from 'react-router';

type SlideButtonProps = {
  text: string;
};

export const SlideButton = ({ text }: SlideButtonProps) => {
  return <div className={styles.link}>{text}</div>;
};
