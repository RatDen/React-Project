import styles from './styles.module.css';
import clsx from 'clsx';
import { ReactElement } from 'react';

type ActionLinkExternalProps = {
  href: string;
  children?: ReactElement | ReactElement[];
  round?: boolean;
  square?: boolean;
};

export const ActionLinkExternal = ({
  href,
  children,
  round = false,
  square = false,
}: ActionLinkExternalProps) => {
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
