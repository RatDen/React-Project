import styles from './styles.module.css';
import clsx from 'clsx';
import { ReactElement } from 'react';
import { Link } from 'react-router';

export type ActionLinkProps = {
  href: string;
  children?: ReactElement | ReactElement[];
  form?: 'common' | 'round' | 'square';
};

export const ActionLink = ({
  href,
  children,
  form = 'common',
}: ActionLinkProps) => {
  return (
    <Link
      to={href}
      className={clsx(
        styles.link,
        form === 'round' ? styles.round : '',
        form === 'square' ? styles.square : ''
      )}
    >
      {children}
    </Link>
  );
};
