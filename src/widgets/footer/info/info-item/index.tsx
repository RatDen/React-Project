import styles from './styles.module.css';
import clsx from 'clsx';
import { ReactElement } from 'react';

type InfoItemProps = {
  title?: string;
  children?: ReactElement | ReactElement[];
  wide?: boolean;
  centered?: boolean;
};

export const InfoItem = ({
  title,
  children,
  wide = false,
  centered = false,
}: InfoItemProps) => {
  return (
    <div className={styles.info_item}>
      {title && <h3>{title}</h3>}
      <div
        className={clsx(
          styles.content_wrap,
          wide ? styles.content_wrap_wide : '',
          centered ? styles.content_wrap_centered : ''
        )}
      >
        {children}
      </div>
    </div>
  );
};
