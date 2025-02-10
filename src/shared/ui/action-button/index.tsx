import styles from './styles.module.css';
import { ReactElement } from 'react';
import clsx from 'clsx';

export type ActionButtonProps = {
  children?: ReactElement | ReactElement[];
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  round?: boolean;
  square?: boolean;
  accent?: boolean;
  promo?: boolean;
  disabled?: boolean;
};

export const ActionButton = ({
  children,
  onClick,
  type = 'button',
  round = false,
  square = false,
  accent = false,
  promo = false,
  disabled = false,
}: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        styles.button,
        round ? styles.round : '',
        square ? styles.square : '',
        accent ? styles.accent : '',
        promo ? 'special_button' : ''
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
