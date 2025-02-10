import styles from './styles.module.css';
import clsx from 'clsx';
import { ReactElement } from 'react';
import { Link } from 'react-router';

export type ActionLinkProps = {
  href: string;
  children?: ReactElement | ReactElement[];
  round?: boolean;
  square?: boolean;
};

export const ActionLink = ({
  href,
  children,
  round = false,
  square = false,
}: ActionLinkProps) => {
  return (
    <Link
      to={href}
      className={clsx(
        styles.link,
        round ? styles.round : '',
        square ? styles.square : ''
      )}
    >
      {children}
    </Link>
  );
};
