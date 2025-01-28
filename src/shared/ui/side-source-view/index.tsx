import styles from './styles.module.css';

type TSideSourceViewProps = {
  img: string;
  alt?: string;
  text: string;
  title: string;
};

const SideSourceView = ({
  img,
  alt = '',
  text,
  title,
}: TSideSourceViewProps) => {
  return (
    <div className={styles.view_container}>
      <img src={img} alt={alt} className={styles.view__image} />
      <div>
        <p className={styles.view__text}>{text}</p>
        <p className={styles.view__title}>{title}</p>
      </div>
    </div>
  );
};

export default SideSourceView;
