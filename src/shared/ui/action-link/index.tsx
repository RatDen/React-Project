import styles from './styles.module.css';
import { ReactElement } from 'react';
import clsx from 'clsx';

type TActionLinkProps = {
  href: string;
  children?: ReactElement | ReactElement[];
  round?: boolean;
  square?: boolean;
};

const ActionLink = ({
  href,
  children,
  round = false,
  square = false,
}: TActionLinkProps) => {
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

export default ActionLink;
