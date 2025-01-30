import styles from './styles.module.css';
import { ReactElement } from 'react';
import clsx from 'clsx';

type ActionButtonProps = {
  children?: ReactElement | ReactElement[];
  onClick?: () => void;
  round?: boolean;
  square?: boolean;
  promo?: boolean;
};

export const ActionButton = ({
  children,
  onClick,
  round = false,
  square = false,
  promo = false,
}: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        styles.button,
        round ? styles.round : '',
        square ? styles.square : '',
        promo ? 'special_button' : ''
      )}
    >
      {children}
    </button>
  );
};
