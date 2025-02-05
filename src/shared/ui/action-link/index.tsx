import styles from './styles.module.css';
import { ReactElement } from 'react';
import clsx from 'clsx';

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
    <a
      href={href}
      className={clsx(
        styles.link,
        round ? styles.round : '',
        square ? styles.square : ''
      )}
    >
      {children}
    </a>
  );
};
