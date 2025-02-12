import styles from './styles.module.css';
import clsx from 'clsx';
import { ReactElement } from 'react';

type ActionLinkExternalProps = {
  href: string;
  children?: ReactElement | ReactElement[];
  form?: 'common' | 'round' | 'square';
};

export const ActionLinkExternal = ({
  href,
  children,
  form = 'common',
}: ActionLinkExternalProps) => {
  return (
    <a
      href={href}
      className={clsx(
        styles.link,
        form === 'round' ? styles.round : '',
        form === 'square' ? styles.square : ''
      )}
    >
      {children}
    </a>
  );
};
